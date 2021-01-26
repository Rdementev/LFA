import * as React from 'react';

const instanceFactory = () => {
  let $tc = -1;
  let $cc = -1;

  return {
    tabCursor: () => $tc,
    contentCursor: () => $cc,
    incTabCursor: () => $tc = $tc + 1,
    incContentCursor: () => $cc = $cc + 1,
  }
}

const TabsContext = React.createContext({
  ...instanceFactory(),
  currentActive: 0,
  updateActiveTab: () => {},
});

const useContext = () => {
  const ctx = React.useContext(TabsContext);
  return ctx;
}



export const Container = ({ children }) => {
  const [currentActive, updateState] = React.useState(-1);

  const updateActiveTab = (n) => updateState((x) => {
    return n === x
      ? -1
      : n
  });

  const instance = React.useMemo(instanceFactory, []);

  return (
    <TabsContext.Provider value={{
      ...instance,
      currentActive,
      updateActiveTab,
    }}>
      {children}
    </TabsContext.Provider>
  );
}


export const Item = ({ isActive, children, className }) => {

  const ctx = useContext();

  const tabIndex = React.useMemo(() => {
    ctx.incTabCursor();
    return ctx.tabCursor();
  }, []);


  const handleClick = () => {
    ctx.updateActiveTab(tabIndex);
  }


  React.useEffect(() => {
    if(isActive){
      ctx.updateActiveTab(tabIndex);
    }
  }, []);


  const isActiveCls = ctx.currentActive === tabIndex ? ' isActive' : '';

  return (
    <span
      onClick={handleClick}
      className={className + isActiveCls}>
            {children}
        </span>
  );
}



export const Content = ({ children }) => {

  const ctx = useContext();

  const contentIndex = React.useMemo(() => {
    ctx.incContentCursor();
    return ctx.contentCursor();
  }, []);

  const isShow = contentIndex === ctx.currentActive;

  return (
    <React.Fragment>
      {isShow
        ? children
        : null}
    </React.Fragment>
  );
}
