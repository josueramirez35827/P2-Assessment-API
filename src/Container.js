import { Route, Routes } from 'react-router-dom';
import Cat from './components/Cat';
import Dog from './components/Dog';
import NotFound from './components/NotFound';

function Container() {
  return (
    <div>
      <Routes>
        <Route path='/' />
        <Route path='/cat' element={<Cat />} />
        <Route path='/Dog' element={<Dog />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default Container;