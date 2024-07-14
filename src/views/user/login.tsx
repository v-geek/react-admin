import { setToken } from '@/store/modules/user'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  setTimeout(() => {
    localStorage.setItem('token', 'test-token')
    dispatch(setToken('test-token'))
    navigate('/components/upload')
  }, 200)

  return <div>Login</div>
}

export default login
