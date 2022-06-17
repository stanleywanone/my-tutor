import { FC, useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

export const Side: FC<any> = () => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState('');
  const itemOptions = [
    { value: '/introduction', label: 'Introduction' },
    { value: '/firstgrade', label: '1st Grade', level: 'parent' },
    { value: '/firstgrade/mathmap', label: 'Math Map', level: 'child', parent: '/firstgrade' },
    { value: '/firstgrade/addition', label: 'Addition', level: 'child', parent: '/firstgrade' },
  ];

  const levelCondition = useCallback(
    (item: any) => {
      if (item.level === 'parent') {
        if (openMenu === '') setOpenMenu(item.value);
        if (openMenu === item.value) setOpenMenu('');
      } else {
        if (openMenu !== item.parent) setOpenMenu('');
        console.log('openm, ', openMenu);
        router.push(item.value);
      }
    },
    [openMenu, router]
  );

  return (
    <div className="side-container">
      <h1 className="side-title">Mytutor</h1>
      {itemOptions.map((item) => {
        return (
          (item.level !== 'child' || openMenu === item.parent) && (
            <div
              className="side-item"
              style={{
                backgroundColor: router.pathname === item.value ? '#fdd85d' : undefined,
                justifyContent: item.level === 'child' ? 'center' : undefined,
              }}
              key={item.label}
              onClick={() => levelCondition(item)}
            >
              <div
                className="side-item-content"
                style={{
                  paddingLeft: item.level === 'child' ? '0px' : '10px',
                }}
              >
                {' '}
                <p>{item.label}</p>{' '}
                {item.level === 'parent' && openMenu === '' && <IoMdArrowDropdown />}
                {item.level === 'parent' && openMenu === item.value && <IoMdArrowDropup />}
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};
