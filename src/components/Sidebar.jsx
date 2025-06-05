// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // ✅ Correct relative path

const Sidebar = () => {
  const { user } = useAuth();

  if (!user) return null;

  const linksByRole = {
    student: [
      { path: '/student/dashboard', label: 'Dashboard' },
      { path: '/student/enroll', label: 'Enroll' },
      { path: '/student/grades', label: 'Grades' },
    ],
    admin: [
      { path: '/admin/dashboard', label: 'Dashboard' },
      { path: '/admin/register-users', label: 'Register Users' },
      { path: '/admin/create-department', label: 'Create Department' },
      { path: '/admin/create-course', label: 'Create Courses' },
      { path: '/admin/assign-instructor', label: 'Assign Instructor' },
      { path: '/admin/view-database', label: 'View Database' },
    ],
    instructor: [
      { path: '/instructor/dashboard', label: 'Dashboard' },
      { path: '/instructor/assignments', label: 'Assignments' },
      { path: '/instructor/grades', label: 'Grade Students' },
    ],
  };

  const links = linksByRole[user.role] || [];

  if (links.length === 0) return null;

  return (
    <div className="w-52 bg-blue-800 text-white p-4 min-h-full">
      <h2 className="text-xl font-bold mb-6">
        {user.role.charAt(0).toUpperCase() + user.role.slice(1)} Portal
      </h2>
      <nav className="space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${isActive ? 'bg-blue-600' : 'hover:bg-blue-700'}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
