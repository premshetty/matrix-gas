import { QuizProvider } from './QuizContext'
import HomePage from '@/components/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Home() {

  return (
    <QuizProvider>
      <HomePage />
      <ToastContainer position="bottom-right" autoClose={2000} />
    </QuizProvider>
  )
}
