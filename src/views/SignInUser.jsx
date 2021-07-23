import SignOut from '../components/SignOut';
import Sidebar from '../components/sideBar';
import SignIn from '../components/SignIn';

export const SignInUser =()=>{
    return <>
      <SignOut />
      <div className='mainContainer'>
        <Sidebar />
	      <div className='profileContainer'>
          <SignIn />
				</div>
		</div>
    </>
}