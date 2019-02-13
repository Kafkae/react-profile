/* eslint-disable */
import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const Title = styled.h1`
  font-family: 'M PLUS 1p', sans-serif;
  text-align: center;
  color: #fff;
  text-shadow:
       2px  2px 0 #000,
      -1px -1px 0 #000,  
       1px -1px 0 #000,
      -1px  1px 0 #000,
       1px  1px 0 #000;
  margin: 1%;
  font-weight: bold;
  font-size: 2.1em;
  letter-spacing: 3px;
`;
const FormikForm = ({
  errors,
  touched,
  isSubmitting,
}) => (
  <Fragment>
    <Title>Добавить профиль</Title>
    <Form>
      <div>
        <label htmlFor="firstName">
          { 'Имя' }
          <Field type="text" name="firstName" placeholder="text" id="firstName" />
          { touched.firstName && errors.firstName && <p>{errors.firstName}</p> }
        </label>
      </div>
      <div>
        <label htmlFor="lastName">
          { 'Фамилия' }
          <Field type="text" name="lastName" />
          { touched.lastName && errors.lastName && <p>{errors.lastName}</p> }
        </label>
      </div>
      <div>
        <label htmlFor="email">
          { 'Почта' }
          <Field type="mail" name="email" placeholder="text" id="email" />
          { touched.email && errors.email && <p>{errors.email}</p> }
        </label>
      </div>
      <div>
        <label htmlFor="lvl">
          { 'Уровень' }
          <Field type="range" name="lvl" id="lvl"  min='1' max='3' step='1' />
          { touched.lvl && errors.lvl && <p>{errors.lvl}</p> }
        </label>
      </div>
      <div>
        <label htmlFor="desc">
          { 'О себе' }
          <Field component="textarea" name="desc"  id="desc" />
          { touched.desc && errors.desc && <p>{errors.desc}</p> }
        </label>
      </div>
      <div>
        <label htmlFor="fast">
          { 'Подтверждение' }
          <Field type="checkbox" />
          { touched.fast && errors.fast && <p>{errors.fast}</p> }
        </label>
      </div>
      
      <button type="submit" disabled={isSubmitting}>Submit</button>
    </Form>
  </Fragment>
);

const Addprofile = withFormik({
  mapPropsToValues({ firstName, lastName, email, lvl}) {
    return {
      firstName: firstName || '',
      lastName: lastName || '',
      lvl: lvl || 2,
      email: email || 'user@example.ru',
    };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required('Email is required'),
    lastName: Yup.string().required('Email is required'),
  }),
  handleSubmit(values, { resetForm }) {
    resetForm();
    console.log(values);
  },
})(FormikForm);

export default Addprofile;
