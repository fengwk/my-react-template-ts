import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { homeActions } from '@/models';

const Home: React.FC = () => {
  const homeState = useSelector((state: any) => state.home);
  const dispatch = useDispatch();
  const { setValue } = homeActions;
  return (
    <div>
      <h1>首页</h1>
      <p>欢迎来到首页</p>
      <p>
        点击 <Link to='/test'>测试页</Link> 查看测试内容
      </p>
      <p>
        <input
          value={homeState.value}
          onChange={ev => dispatch(setValue(ev.target.value))}
        />
      </p>
    </div>
  );
};

export default Home;
