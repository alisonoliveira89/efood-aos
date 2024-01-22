import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import SideBar from '../SideBar'
import { Status } from '../../utils/enums/Status'
import { RootReducer } from '../../store'
import * as S from './styles'
import Button from '../Button'
import { changeStatus } from '../../store/reducers/status'
import { useFormik } from 'formik'

export const formikDelivery = {
  initialValues: {
    fullName: '',
    address: '',
    city: '',
    zipCode: '',
    number: '',
    complement: ''
  }
}

const Delivery = () => {
  const { status } = useSelector((state: RootReducer) => state)
  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(10, 'O endereço precisa ter pelo menos 10 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'A cidade precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(9, 'O zipCode precisa ter 9 caracteres')
        .max(9, 'O nome precisa ter 9 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string()
        .min(1, 'O numero precisa ter pelo menos 1 caracter')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      // console.log(values)
      formikDelivery.initialValues = values
      const nextStatus = Status.Payment
      dispatch(changeStatus(nextStatus))
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const setPreviousStatus = () => {
    const previousStatus = Status.Cart
    dispatch(changeStatus(previousStatus))
  }

  return (
    <>
      {status.status === Status.Delivery ? (
        <SideBar>
          <S.SideBar>
            <form onSubmit={form.handleSubmit}>
              <S.Details>
                <h3>Entrega</h3>
                <label htmlFor="fullName">Quem irá receber</label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={form.values.fullName}
                  onChange={form.handleChange}
                  className={checkInputHasError('fullName') ? 'error' : ''}
                />

                <label htmlFor="address">Endereço</label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  value={form.values.address}
                  onChange={form.handleChange}
                  className={checkInputHasError('address') ? 'error' : ''}
                />
                <label htmlFor="city">Cidade</label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  value={form.values.city}
                  onChange={form.handleChange}
                  className={checkInputHasError('city') ? 'error' : ''}
                />
                <div>
                  <label htmlFor="zipCode">zipCode</label>
                  <label htmlFor="number">Número</label>
                  <InputMask
                    id="zipCode"
                    type="text"
                    name="zipCode"
                    value={form.values.zipCode}
                    onChange={form.handleChange}
                    className={checkInputHasError('zipCode') ? 'error' : ''}
                    mask="99999-999"
                  />
                  <input
                    id="number"
                    type="text"
                    name="number"
                    value={form.values.number}
                    onChange={form.handleChange}
                    className={checkInputHasError('number') ? 'error' : ''}
                  />
                </div>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  id="complement"
                  type="text"
                  name="complement"
                  value={form.values.complement}
                  onChange={form.handleChange}
                />
              </S.Details>
              <div className="groupButtons">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={form.handleSubmit}
                >
                  Continuar com o pagamento
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={setPreviousStatus}
                >
                  Voltar para o carrinho
                </Button>
              </div>
            </form>
          </S.SideBar>
        </SideBar>
      ) : (
        <></>
      )}
    </>
  )
}

export default Delivery
