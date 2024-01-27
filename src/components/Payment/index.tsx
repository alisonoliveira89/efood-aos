import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import { Status } from '../../utils/enums/Status'
import SideBar from '../SideBar'
import { RootReducer } from '../../store'
import * as S from './styles'
import { Details } from '../Delivery/styles'
import { changeStatus } from '../../store/reducers/status'
import Button from '../Button'
import { getTotalPrice, parseToBrl } from '../../utils'
import InputMask from 'react-input-mask'
import { usePurchaseMutation } from '../../services/api'

import { formikDelivery } from '../Delivery'
import { clear, close } from '../../store/reducers/cart'

const Payment = () => {
  const { cart, status } = useSelector((state: RootReducer) => state)
  const [purchase, { data, isSuccess, isLoading, reset }] =
    usePurchaseMutation()
  const dispatch = useDispatch()
  const [resetForm, setResetForm] = useState(false)

  const delivery = formikDelivery.initialValues

  const form = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cardVV: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      cardName: Yup.string()
        .required('O campo é obrigatório')
        .min(5, 'O nome precisa ter pelo menos 5 caracteres'),
      cardNumber: Yup.string()
        .required('O campo é obrigatório')
        .matches(
          /^\d{4} \d{4} \d{4} \d{4}$/,
          'O numero do cartão precisa ter 16 caracteres'
        ),
      cardVV: Yup.string()
        .required('O campo é obrigatório')
        .matches(/^\d{3}$/, 'O CVV precisa ter 3 caracteres'),
      expiresMonth: Yup.string()
        .required('O campo é obrigatório')
        .test('valid-month', 'Digite um mês válido (01 a 12)', (value) => {
          const month = parseInt(value, 10)
          return month >= 1 && month <= 12
        })
        .matches(/^\d{2}$/, 'Digite um mês válido (01 a 12)'),
      expiresYear: Yup.string()
        .required('O campo é obrigatório')
        .matches(/^\d{2}$/, 'O endereço precisa ter pelo menos 2 caracteres')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: delivery.fullName,
          address: {
            description: delivery.address,
            city: delivery.city,
            zipCode: delivery.zipCode,
            number: Number(delivery.number),
            complement: delivery.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardVV),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: cart.items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const setPreviousStatus = () => {
    const previousStatus = Status.Delivery
    dispatch(changeStatus(previousStatus))
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
      setResetForm(true)
    }
  }, [isSuccess, dispatch])

  useEffect(() => {
    if (resetForm) {
      const nextStatus = Status.Finish
      dispatch(changeStatus(nextStatus))
      form.resetForm()
      setResetForm(false)
    }
  }, [resetForm, form, dispatch])

  const closeCart = () => {
    dispatch(close())
    reset()
  }

  return (
    <>
      {status.status === Status.Payment || status.status === Status.Finish ? (
        <SideBar>
          <S.SideBar>
            {isSuccess && data ? (
              <>
                <Details>
                  <h3>Pedido realizado - {data.orderId}</h3>
                  <p>
                    Estamos felizes em informar que seu pedido já está em
                    processo de preparação e, em breve, será entregue no
                    endereço fornecido.
                  </p>
                  <p>
                    Gostaríamos de ressaltar que nossos entregadores não estão
                    autorizados a realizar cobranças extras.
                  </p>
                  <p>
                    Lembre-se da importância de higienizar as mãos após o
                    recebimento do pedido, garantindo assim sua segurança e
                    bem-estar durante a refeição.
                  </p>
                  <p>
                    Esperamos que desfrute de uma deliciosa e agradável
                    experiência gastronômica. Bom apetite!
                  </p>
                </Details>
                <div>
                  <Button type="button" variant="secondary" onClick={closeCart}>
                    Concluir
                  </Button>
                </div>
              </>
            ) : (
              <form onSubmit={form.handleSubmit}>
                <Details>
                  <h3>
                    Pagamento - Valor a pagar R${' '}
                    {parseToBrl(getTotalPrice(cart.items))}
                  </h3>
                  <label htmlFor="cardName">Nome no cartão</label>
                  <input
                    id="cardName"
                    type="text"
                    name="cardName"
                    value={form.values.cardName}
                    onChange={form.handleChange}
                    className={checkInputHasError('cardName') ? 'error' : ''}
                  />
                  <div>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <label htmlFor="cardVV">CVV</label>
                    <InputMask
                      id="cardNumber"
                      type="text"
                      name="cardNumber"
                      mask="9999 9999 9999 9999"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      className={
                        checkInputHasError('cardNumber') ? 'error' : ''
                      }
                    />
                    <InputMask
                      id="cardVV"
                      type="text"
                      name="cardVV"
                      mask="999"
                      value={form.values.cardVV}
                      onChange={form.handleChange}
                      className={checkInputHasError('cardVV') ? 'error' : ''}
                    />
                  </div>
                  <div>
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <InputMask
                      id="expiresMonth"
                      type="text"
                      name="expiresMonth"
                      mask="99"
                      value={form.values.expiresMonth}
                      onChange={form.handleChange}
                      className={
                        checkInputHasError('expiresMonth') ? 'error' : ''
                      }
                    />
                    <InputMask
                      id="expiresYear"
                      type="text"
                      name="expiresYear"
                      mask="99"
                      value={form.values.expiresYear}
                      onChange={form.handleChange}
                      className={
                        checkInputHasError('expiresYear') ? 'error' : ''
                      }
                    />
                  </div>
                </Details>
                <div className="groupButtons">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={form.handleSubmit}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Finalizando...' : 'Finalizar pagamento'}
                  </Button>
                  {isLoading ? (
                    ''
                  ) : (
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={setPreviousStatus}
                    >
                      Voltar para a edição de endereço
                    </Button>
                  )}
                </div>
              </form>
            )}
          </S.SideBar>
        </SideBar>
      ) : (
        <></>
      )}
    </>
  )
}

export default Payment
