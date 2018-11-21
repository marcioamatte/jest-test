import {
  findUser
} from '../src/services/user.service'

describe('User Test Suite', async () => {
  test('Find user with ID = 1', async () => {
    const user = await findUser(1)
    expect(user.name).toBe('Marcio')
  })
  test('User not found with ID = 100', async () => {
    try {
      await findUser(100)
    } catch (e) {
      expect(e.error).toEqual('User not found')
    }
  })
})
