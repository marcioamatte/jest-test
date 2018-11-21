const users = [{
  id: 1,
  name: 'Marcio'
},
{
  id: 2,
  name: 'Angelo'
},
{
  id: 3,
  name: 'Matté'
}
]

export const findUserById = async id => {
  const usersFiltered = users.filter(user => user.id === id)
  if (usersFiltered.length > 0) return usersFiltered[0]
  return new Error('User not found')
}
