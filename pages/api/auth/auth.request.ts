import { apiInstance } from '../apiInstance'
import { UserSignUpData, UserSignInData } from './auth.interface'

export async function signUpUser(
  requestData: UserSignUpData
): Promise<boolean> {
  const PATH = '/signup'
  const res = await apiInstance.post(PATH, requestData)
  return res.data.data
}

export async function signInUser(
  requestData: UserSignInData
): Promise<boolean> {
  const PATH = '/login'
  const res = await apiInstance.post(PATH, requestData)
  const token = res.data.data['token']
  const userRole = res.data.data['userRole']
  const userFaculty = res.data.data['faculty']
  if (userRole != 'Admin' && userFaculty != 'FCSC') {
    throw {
      response: {
        data: {
          message: 'You are not authorized to access this page.',
        }
      }
    }
  }
  if (token) {
    window.localStorage.setItem('Token', token)
    window.localStorage.setItem('Role', userRole)
  }
  return res.data.data
}
