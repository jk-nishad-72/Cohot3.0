
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Tanstack from "./pages/Tanstack.jsx";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'


// Create a client
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <Tanstack  />
  </QueryClientProvider>,
)

