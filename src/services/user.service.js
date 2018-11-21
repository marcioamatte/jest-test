import {
  findUserById
} from '../repositories/user.repository'

export const findUser = async id => {
  try {
    const user = await findUserById(id)
    return user
  } catch (error) {
    throw error
  }
}
