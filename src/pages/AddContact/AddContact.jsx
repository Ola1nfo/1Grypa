import './AddContact.css'

import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
export default function AddContact() {
  const initialValues ={
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    avatar: '',
    gender: '',
    status: '',
    favorite: '',
  }

  return (
    <>
    <div className="container">
      <div className="modal-content addPage rounded shadow">
        <div className="modal-header">
          <h1 className="text-center">Add new contact</h1>
        </div>
        <Formik initialValues={initialValues} validationScema={validationScema} onSubmit={ handleSubmit}>
          {({isSubmitting}) => (
              <Form>
                <div className="container">
                  .
                </div>
              </Form>
             )}

        </Formik>
      </div>
    </div>

       </>
  )
}