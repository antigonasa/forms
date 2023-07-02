import { useState } from 'react';
import './App.scss';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { MdKeyboardArrowDown } from 'react-icons/md'

function App() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [occupation, setOccupation] = useState('Frontend dev');
  const [bio, setBio] = useState('');
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState('')

  const [viewPassword, setViewPassword] = useState(false);
  const [viewPassword2, setViewPassword2] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    if (!email || !fullname || !password || !bio || !occupation) {
      setError('Please fill in all fields!')
    }
    else if (password != confirmPassword) {
      setError('Passwords do not match!')
    }
    else if (password.length < 8) {
      setError('Password should contain 8 characters or more!')
    }
    else if(!terms){
      setError('Please accept our terms of privacy!')
    }
    else {
      console.log('sign up success')
      setError('');
      setFullname('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setOccupation('Frontend dev');
      setBio('');
      setTerms(false);
    }
  }

  return (
    <div className="App">
      <form onSubmit={handleSignup}>
        <h1>Sign up</h1>
        <div className='input-container'>
          <input
            maxLength={50}
            className='text-input'
            type='text'
            placeholder='Fullname'
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>

        <div className='input-container'>
          <input
            className='text-input'
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='input-container'>
          <input
            className='text-input'
            type={viewPassword ? 'text' : 'password'}
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span onClick={() => setViewPassword(!viewPassword)}>
            {viewPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>
        </div>


        <div className='input-container'>
          <input
            className='text-input'
            type={viewPassword2 ? 'text' : 'password'}
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span onClick={() => setViewPassword2(!viewPassword2)}>
            {viewPassword2 ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>
        </div>

        <div className='my-select'>


          <div className='value-container' onClick={() => setDropdown(!dropdown)}>
            <p>{occupation}</p>
            <span><MdKeyboardArrowDown /></span>
          </div>

          {dropdown ? <ul>
            <li 
              onClick={() => {setOccupation('Frontend dev'); setDropdown(false)}} 
              className={occupation == 'Frontend dev' ? 'selected' : ''}>
                Frontend dev
            </li>
            <li 
              onClick={() => {setOccupation('Backend dev');setDropdown(false)}} 
              className={occupation == 'Backend dev' ? 'selected' : ''}>
                Backend dev
            </li>
            <li 
              onClick={() => {setOccupation('Fullstack'); setDropdown(false)}} 
              className={occupation == 'Fullstack' ? 'selected' : ''}>
                Fullstack
            </li>
          </ul> : null}
        </div>

        <textarea placeholder='Bio' value={bio} onChange={(e) => setBio(e.target.value)} />
        <div className='checkbox-container'>
          <label>
            <input type='checkbox' checked={terms} onChange={() => setTerms(!terms)} />
            Accept the terms of privacy
          </label>
        </div>

        {error ? <p className='error'>{error}</p> : null}
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
