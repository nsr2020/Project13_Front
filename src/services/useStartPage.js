import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { StartPageContext } from '../providers/StartPageProvider';

export const useStartPage = () => {
  const { state, dispatch } = useContext(StartPageContext);
  const {
    isFormsArea,
    form,
    isLoadingLogin,
    isButtonDisabledLogin,
    isLoadingRegister,
    isButtonDisabledRegister,
  } = state;
  const user = localStorage.getItem('userName');
  const navigate = useNavigate();
  const [demo, setDemo] = useState(null)

  const handleDemo = () => {
    setDemo("demo");
    navigate('/platforms', { state: { demo: "demo" } });
  };
  useEffect(() => {
    if (user) {
      navigate('/platforms');
    }
  }, [user]);
  return {
    isFormsArea,
    dispatch,
    form,
    isLoadingLogin,
    isButtonDisabledLogin,
    isLoadingRegister,
    isButtonDisabledRegister,
    handleDemo,
    demo
  };
};
