import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface SlidTabsProps {
  tabs: Array<{
    label: string;
    href?: string;
    onClick?: () => void;
  }>;
  selectedIndex?: number;
  onTabSelect?: (index: number) => void;
  className?: string;
}

export const SlideTabs: React.FC<SlidTabsProps> = ({ 
  tabs, 
  selectedIndex = 0, 
  onTabSelect,
  className = ""
}) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [selected, setSelected] = useState(selectedIndex);
  const tabsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    setSelected(selectedIndex);
  }, [selectedIndex]);

  useEffect(() => {
    const selectedTab = tabsRef.current[selected];
    if (selectedTab) {
      const rect = selectedTab.getBoundingClientRect();
      const parentRect = selectedTab.offsetParent?.getBoundingClientRect();
      
      setPosition({
        left: selectedTab.offsetLeft,
        width: selectedTab.offsetWidth, // Use offsetWidth instead of getBoundingClientRect width
        opacity: 1,
      });
    }
  }, [selected]);

  const handleTabClick = (index: number) => {
    setSelected(index);
    onTabSelect?.(index);
    if (tabs[index].onClick) {
      tabs[index].onClick?.();
    }
  };

  return (
    <ul
      onMouseLeave={() => {
        const selectedTab = tabsRef.current[selected];
        if (selectedTab) {
          setPosition({
            left: selectedTab.offsetLeft,
            width: selectedTab.offsetWidth,
            opacity: 1,
          });
        }
      }}
      className={`relative mx-auto flex w-fit ${className}`}
    >
      {tabs.map((tab, i) => (
        <Tab
          key={tab.label}
          ref={(el) => (tabsRef.current[i] = el)}
          setPosition={setPosition}
          onClick={() => handleTabClick(i)}
          isSelected={i === selected}
        >
          {tab.label}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
};

interface TabProps {
  children: React.ReactNode;
  setPosition: (position: { left: number; width: number; opacity: number }) => void;
  onClick: () => void;
  isSelected: boolean;
}

const Tab = React.forwardRef<HTMLLIElement, TabProps>(({ children, setPosition, onClick, isSelected }, ref) => {
  return (
    <li
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => {
        if (!ref || typeof ref === 'function' || !ref.current) return;

        setPosition({
          left: ref.current.offsetLeft,
          width: ref.current.offsetWidth,
          opacity: 1,
        });
      }}
      className={`relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase md:px-5 md:py-3 md:text-base pointer-events-auto transition-colors ${
        isSelected ? 'text-black' : 'text-white'
      }`}
    >
      {children}
    </li>
  );
});

Tab.displayName = "Tab";

interface CursorProps {
  position: {
    left: number;
    width: number;
    opacity: number;
  };
}

const Cursor: React.FC<CursorProps> = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-lg bg-white dark:bg-black md:h-12"
    />
  );
};