/* eslint-disable */
import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const Title = styled.h1`
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

const AddForm = styled(Form)`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 100px);
  @media (max-width: 490px) {
    grid-template-rows: repeat(9, 100px);
  }
`;

const Label = styled.label`
  font-size: 1.8em;
  color: #fff;
  text-shadow:
       2px  2px 0 #000,
      -1px -1px 0 #000,  
       1px -1px 0 #000,
      -1px  1px 0 #000,
       1px  1px 0 #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
`;

const NameForm = styled(Field)` 
  padding: 5px;
  margin-top: 8px;
  margin-bottom: 5px;
  width: 100%;
`;

const Error = styled.span`
  color: tomato;
  font-size: 1.2em;
  text-shadow:
       2px  2px 0 #000,
      -1px -1px 0 #000,  
       1px -1px 0 #000,
      -1px  1px 0 #000,
       1px  1px 0 #000;
`;

const FirstName = styled.div`
  grid-column: 1/4;
  grid-row: 1/2;
  @media (max-width: 680px) {
    grid-column: 1/3;
  }
  @media (max-width: 490px) {
    grid-column: 1/-1;
  }
`;

const LastName = styled.div`
  grid-column: 1/4;
  grid-row: 2/3;
  @media (max-width: 680px) {
    grid-column: 1/3;
  }
  @media (max-width: 490px) {
    grid-column: 1/-1;
  }
`;

const Email = styled.div`
  grid-column: 1/4;
  grid-row: 3/4;
  @media (max-width: 680px) {
    grid-column: 1/3;
  }
  @media (max-width: 490px) {
    grid-column: 1/-1;
  }
`;

const Textarea = styled(Field)`
  padding: 5px;
  margin-top: 8px;
  margin-bottom: 5px;
  width: 100%;
  height: 277px;
  resize: none;
`;

const Desc = styled.div`
  grid-column: 4/7;
  grid-row: 1/4;
  @media (max-width: 680px) {
    grid-column: 3/7;
  }
  @media (max-width: 490px) {
    grid-column: 1/-1;
    grid-row: 4/6;
  }
`;

const Lvl = styled.div`
  grid-column: 1/2;
  grid-row: 4/5;
  @media (max-width: 490px) {
    grid-column: 1/-1;
    grid-row: 8/7;
  }
`;

const RangeLvl = styled(Field)`
  appearance: none;
  background: #000;
  border-radius: 0.125rem;
  height: 0.25rem;
  margin: 0 0.5rem;
  outline: none;
  width: 12rem;
  margin-top: 30px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: #fff;
    border: 0;
    border: 2px solid #000;
    border-radius: 50%;
    height: 45px;
    width: 45px;
  }

  &:focus::-webkit-slider-thumb {
    outline: -webkit-focus-ring-color auto 5px;
  }

  &::-moz-range-thumb {
    background: #fff;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    height: 40px;
    width: 40px;
    border: 2px solid #000;
  }

  &::-moz-range-track {
    border-radius: 5px;
    cursor: pointer;
    height: 10px;
    width: 100%;
  }
`;

const Spec = styled.div`
  grid-column: 2/4;
  grid-row: 4/5;
  @media (max-width: 680px) {
    grid-column: 3/7;
  }
  @media (max-width: 490px) {
    grid-column: 1/-1;
    grid-row: 9/8;
  }
`;

const SpecField = styled(Field)`
  margin-top: 5px;
`;

const Button = styled.button`
  border: none;
  background: none;
  font-size: 2em;
  grid-column: 6/6;
  color: #fff;
  white-space: nowrap;
  text-shadow:
       2px  2px 0 #000,
      -1px -1px 0 #000,  
       1px -1px 0 #000,
      -1px  1px 0 #000,
       1px  1px 0 #000;
  @media (max-width: 680px) {
    grid-column: 1/-1;
  }
  @media (max-width: 680px) {
    grid-row: 10/9;
  }
`;

const FormikForm = ({
  errors,
  touched,
  isSubmitting,
}) => (
  <Fragment>
    <Title>Добавить профиль</Title>
    <AddForm>
      <FirstName>
        <Label htmlFor="firstName">
          { 'Имя' }
          <NameForm type="text" name="firstName" id="firstName" />
        </Label>
        { touched.firstName && errors.firstName && <Error>{errors.firstName}</Error> }
      </FirstName>
      <LastName>
        <Label htmlFor="lastName">
          { 'Фамилия' }
          <NameForm type="text" name="lastName" />
        </Label>
        { touched.lastName && errors.lastName && <Error>{errors.lastName}</Error> }
      </LastName>
      <Email>
        <Label htmlFor="email">
          { 'Почта' }
          <NameForm type="mail" name="email" id="email" />
        </Label>
        { touched.email && errors.email && <Error>{errors.email}</Error> }
      </Email>
      <Desc>
        <Label htmlFor="desc">
          { 'О себе' }
          <Textarea component="textarea" name="desc" id="desc" />
        </Label>
        { touched.desc && errors.desc && <Error>{errors.desc}</Error> }
      </Desc>
      <Lvl>
        <Label htmlFor="lvl">
          { 'Уровень' }
          <RangeLvl type="range" name="lvl" id="lvl" min="1" max="3" step="1" />
        </Label>
        { touched.lvl && errors.lvl && <Error>{errors.lvl}</Error> }
      </Lvl>
      <Spec>
        <Label htmlFor="spec">
          { 'Выберите тип' }
          <SpecField component="select" name="spec" id="spec">
            <option value="frontend">Фронтед</option>
            <option value="backend">Бэкенд</option>
            <option value="design">Дизайн</option>
            <option value="another">Другое</option>
          </SpecField>
        </Label>
      </Spec>
      <Button type="submit" disabled={isSubmitting}>Отправить!</Button>
    </AddForm>
  </Fragment>
);

const Addprofile = withFormik({
  mapPropsToValues({
    firstName, lastName, email, lvl, desc, spec,
  }) {
    return {
      firstName: firstName || '',
      spec: spec || 'frontend',
      lastName: lastName || '',
      desc: desc || '',
      lvl: lvl || 2,
      email: email || 'user@example.ru',
    };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Слишком короткое имя!')
      .max(50, 'Слишком Длинное имя!')
      .required('Обезательное поле!'),
    lastName: Yup.string()
      .min(2, 'Слишком короткая фамилия!')
      .max(50, 'Слишком длинная фамилия!')
      .required('Обезательное поле!'),
    email: Yup.string()
      .email('Нужна почта!')
      .required('Обезательное поле!'),
    desc: Yup.string()
      .min(10, 'Расскажи о себе подробнее!')
      .max(150, 'Давай короче!')
      .required('Обезательное поле!'),
  }),
  handleSubmit(values, { resetForm }) {
    resetForm();
    console.log(values);
  },
})(FormikForm);

export default Addprofile;
