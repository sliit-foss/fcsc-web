import { apiInstance } from '../apiInstance'
import { UserSignUpData, UserSignInData } from './auth.interface'

export async function signUpUser(
  requestData: UserSignUpData
): Promise<boolean> {
  const PATH = '/signup'

  const res = await apiInstance.post(PATH, requestData)
  return res.data
}

export async function signInUser(
  requestData: UserSignInData
): Promise<boolean> {
  const PATH = '/login'

  const res = await apiInstance.post(PATH, requestData)
  const token = res.data['token']
  const userRole = res.data['userRole']
  const userFaculty = res.data['faculty']
  if (userRole != 'Admin' && userFaculty != 'FCSC') {
    throw 'Unauthorized'
  }
  if (token) {
    window.localStorage.setItem('Token', token)
    window.localStorage.setItem('Role', userRole)
  }

  return res.data
}
