import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

export const Side: FC<any> = () => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState('');
  const itemOptions = [
    { value: '/introduction', label: 'Introduction' },
    { value: '/firstgrade', label: '1st Grade', level: 'parent' },
    { value: '/firstgrade/mathmap', label: 'Math Map', level: 'child', parent: '/firstgrade' },
  ];

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
              }}
              key={item.label}
              onClick={() => router.push(item.value)}
            >
              <p>{item.label}</p>{' '}
              {item.level === 'parent' && openMenu === '' && (
                <IoMdArrowDropdown onClick={() => setOpenMenu(item.value)} />
              )}
              {item.level === 'parent' && openMenu === item.value && (
                <IoMdArrowDropup onClick={() => setOpenMenu('')} />
              )}
            </div>
          )
        );
      })}
    </div>
  );
};
