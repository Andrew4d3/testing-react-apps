// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'
import faker from 'faker'


const buildLoginForm =  () => ({
  username: faker.internet.userName(),
  password: faker.internet.password()
})


test('submitting the form calls onSubmit with username and password', async () => {
  // 🐨 create a variable called "submittedData" and a handleSubmit function that
  // accepts the data and assigns submittedData to the data that was submitted
  // 💰 if you need a hand, here's what the handleSubmit function should do:
  // const handleSubmit = data => (submittedData = data)
  const { username, password } = buildLoginForm()
  const handleSubmit = jest.fn();
  //
  // 🐨 render the login with your handleSubmit function as the onSubmit prop

  render(<Login onSubmit={handleSubmit} />)

  // 🐨 get the username and password fields via `getByLabelText`
  const userNameInput = screen.getByLabelText("Username")
  const passwordInput = screen.getByLabelText("Password")
  // 🐨 use `await userEvent.type...` to change the username and password fields to
  //    whatever you want
  //
  await userEvent.type(userNameInput, username)
  await userEvent.type(passwordInput, password)
  // 🐨 click on the button with the text "Submit"

  await userEvent.click(screen.getByText("Submit"))
  //
  // assert that submittedData is correct
  // 💰 use `toEqual` from Jest: 📜 https://jestjs.io/docs/en/expect#toequalvalue
 expect(handleSubmit).toHaveBeenCalledWith({ username, password })
})

/*
eslint
  no-unused-vars: "off",
*/
