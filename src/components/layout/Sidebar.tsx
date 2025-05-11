import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, ShoppingBag, PackageCheck, BarChart3, Sparkles, Store, Import, MessageSquare, Bot, Truck, Share2, Settings, Building, Users, CreditCard, FileText, HelpCircle, Book, Palette, Globe, Mail, Bell, Boxes, PenTool as Tool, GraduationCap, BookOpen, BarChart, Newspaper, Briefcase, Calculator, Link } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const mainNavItems = [
  { to: '/app/dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
  { to: '/app/products', icon: <ShoppingBag size={20} />, label: 'Products' },
  { to: '/app/import-products', icon: <Import size={20} />, label: 'Import' },
  { to: '/app/orders', icon: <PackageCheck size={20} />, label: 'Orders' },
  { to: '/app/winning-products', icon: <Sparkles size={20} />, label: 'Winning Products' },
  { to: '/app/analytics', icon: <BarChart3 size={20} />, label: 'Analytics' },
  { to: '/app/store-connection', icon: <Store size={20} />, label: 'Store Connection' },
  { to: '/app/reviews', icon: <MessageSquare size={20} />, label: 'Reviews' },
  { to: '/app/automation', icon: <Bot size={20} />, label: 'AI Automation' }
];

const businessNavItems = [
  { to: '/app/logistics', icon: <Truck size={20} />, label: 'Logistics' },
  { to: '/app/suppliers', icon: <Building size={20} />, label: 'Suppliers' },
  { to: '/app/channels', icon: <Share2 size={20} />, label: 'Sales Channels' },
  { to: '/app/customers', icon: <Users size={20} />, label: 'Customers' },
  { to: '/app/payments', icon: <CreditCard size={20} />, label: 'Payments' }
];

const systemNavItems = [
  { to: '/app/settings', icon: <Settings size={20} />, label: 'Settings' },
  { to: '/app/notifications', icon: <Bell size={20} />, label: 'Notifications' },
  { to: '/app/appearance', icon: <Palette size={20} />, label: 'Appearance' },
  { to: '/app/language', icon: <Globe size={20} />, label: 'Language' }
];

const helpNavItems = [
  { to: '/app/documentation', icon: <FileText size={20} />, label: 'Documentation' },
  { to: '/app/support', icon: <HelpCircle size={20} />, label: 'Support' },
  { to: '/app/tutorials', icon: <Book size={20} />, label: 'Tutorials' },
  { to: '/app/contact', icon: <Mail size={20} />, label: 'Contact' }
];

const Sidebar: React.FC = () => {
  return (
    <motion.aside 
      initial={{ x: -280 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="hidden md:flex w-64 flex-col bg-secondary-500 shadow-md z-10"
    >
      <div className="flex h-16 items-center justify-center border-b border-accent-200/10">
        <Logo />
      </div>
      
      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-8">
          {/* Principal */}
          <div>
            <h3 className="px-3 text-xs font-semibold text-accent-200 uppercase tracking-wider">
              Principal
            </h3>
            <ul

      <li><a href="/assistant">🧠 Assistant IA</a></li>
      <li><a href="/ai-products">🔥 Produit Gagnant</a></li>
      <li><a href="/chrome-extension">🔗 Extension Chrome</a></li>
      <li><a href="/multichannel-publish">🌍 Multicanal</a></li>
      <li><a href="/mobile-app">📱 Appli Mobile</a></li>
      <li><a href="/blog-generator">✍️ Blog AI</a></li>
      <li><a href="/onboarding">🚀 Onboarding</a></li>
      <li><a href="/help">❓ Aide & FAQ</a></li>
 className="mt-3 space-y-2">
              {mainNavItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => 
                      `sidebar-link ${isActive ? 'active' : ''}`
                    }
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Business */}
          <div>
            <h3 className="px-3 text-xs font-semibold text-accent-200 uppercase tracking-wider">
              Business
            </h3>
            <ul

      <li><a href="/assistant">🧠 Assistant IA</a></li>
      <li><a href="/ai-products">🔥 Produit Gagnant</a></li>
      <li><a href="/chrome-extension">🔗 Extension Chrome</a></li>
      <li><a href="/multichannel-publish">🌍 Multicanal</a></li>
      <li><a href="/mobile-app">📱 Appli Mobile</a></li>
      <li><a href="/blog-generator">✍️ Blog AI</a></li>
      <li><a href="/onboarding">🚀 Onboarding</a></li>
      <li><a href="/help">❓ Aide & FAQ</a></li>
 className="mt-3 space-y-2">
              {businessNavItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => 
                      `sidebar-link ${isActive ? 'active' : ''}`
                    }
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Système */}
          <div>
            <h3 className="px-3 text-xs font-semibold text-accent-200 uppercase tracking-wider">
              Système
            </h3>
            <ul

      <li><a href="/assistant">🧠 Assistant IA</a></li>
      <li><a href="/ai-products">🔥 Produit Gagnant</a></li>
      <li><a href="/chrome-extension">🔗 Extension Chrome</a></li>
      <li><a href="/multichannel-publish">🌍 Multicanal</a></li>
      <li><a href="/mobile-app">📱 Appli Mobile</a></li>
      <li><a href="/blog-generator">✍️ Blog AI</a></li>
      <li><a href="/onboarding">🚀 Onboarding</a></li>
      <li><a href="/help">❓ Aide & FAQ</a></li>
 className="mt-3 space-y-2">
              {systemNavItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => 
                      `sidebar-link ${isActive ? 'active' : ''}`
                    }
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Aide */}
          <div>
            <h3 className="px-3 text-xs font-semibold text-accent-200 uppercase tracking-wider">
              Aide
            </h3>
            <ul

      <li><a href="/assistant">🧠 Assistant IA</a></li>
      <li><a href="/ai-products">🔥 Produit Gagnant</a></li>
      <li><a href="/chrome-extension">🔗 Extension Chrome</a></li>
      <li><a href="/multichannel-publish">🌍 Multicanal</a></li>
      <li><a href="/mobile-app">📱 Appli Mobile</a></li>
      <li><a href="/blog-generator">✍️ Blog AI</a></li>
      <li><a href="/onboarding">🚀 Onboarding</a></li>
      <li><a href="/help">❓ Aide & FAQ</a></li>
 className="mt-3 space-y-2">
              {helpNavItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => 
                      `sidebar-link ${isActive ? 'active' : ''}`
                    }
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </motion.aside>
  );
};

export default Sidebar;