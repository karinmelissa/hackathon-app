import SignOut from '../components/SignOut';
import Sidebar from '../components/sideBar';
import User from '../components/User';

export const CreateUser =()=>{
    return <>
      <SignOut />
      <div className='mainContainer'>
        <Sidebar />
	      <div className='profileContainer'>
          <User />
				</div>
		</div>
    </>
}