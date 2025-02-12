import React from 'react';

interface TodoContainerProps {
  children: React.ReactNode;
}

const TodoContainer = ({ children }: TodoContainerProps) => {
  return (
    <div className="mt-4">
      {children}
    </div>
  );
};

export default TodoContainer;
