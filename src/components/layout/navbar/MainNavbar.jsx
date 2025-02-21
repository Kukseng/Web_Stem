import React from "react";
import {
  Search,
  ChevronDown,
  Beaker,
  Code,
  Calculator,
  Leaf,
  Menu,
  X,
  UserCircle,
  Settings,
  Inbox,
  LucideHelpingHand,
  LogOut,
} from "lucide-react";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import logomodified from "../../../assets/images/logo/logo-modified.png";
import cherImage from "../../../assets/images/logo/cher.png";
import { Link } from "react-router-dom";

const stemMenuItems = [
  {
    label: "វិទ្យាសាស្រ្ត",
    description: "រៀនអំពីជីវវិទ្យា គីមីវិទ្យា និងរូបវិទ្យា",
    icon: Beaker,
    href: "/science",
  },
  {
    label: "បច្ចេកវិទ្យា",
    description: "កម្មវិធីកុំព្យូទ័រ និងវិស្វកម្ម",
    icon: Code,
    href: "/technology",
  },
  {
    label: "វិស្វកម្ម",
    description: "វិស្វកម្មអេឡិចត្រូនិច និងមេកានិច",
    icon: Calculator,
    href: "/engineering",
  },
  {
    label: "គណិតវិទ្យា",
    description: "ពីជគណិត ធរណីមាត្រ និងស្ថិតិ",
    icon: Leaf,
    href: "/mathematics",
  },
];

const profileMenuItems = [
  { label: "ប្រវត្តិរូប", icon: UserCircle },
  { label: "កែប្រែប្រវត្តិរូប", icon: Settings },
  { label: "សារ", icon: Inbox },
  { label: "ជំនួយ", icon:  LucideHelpingHand },
  { label: "ចាកចេញ", icon: LogOut },
];

const navItems = [
  { label: "ទំព័រដើម", href: "/" },
  { label: "វគ្គសិក្សា", hasDropdown: true },
  { label: "គ្រូបង្រៀន", href: "/គ្រូបង្រៀន" },
  { label: "មាតិកា", href: "/មាតិកា" },
  { label: "អំពីពួកយើង", href: "/អំពីពួកយើង" },
];

function STEMDropdown({ isOpen, setIsOpen, isMobile }) {
  return (
    <div className={`${isMobile ? "w-full" : "relative group"}`}>
      <button
        className="flex items-center space-x-1 text-title hover:text-blue-600 w-full"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-suwan text-sm lg:text-base">វគ្គសិក្សា</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          className={`${
            isMobile
              ? "w-full bg-gray-50 mt-2 rounded-lg"
              : "absolute top-full left-0 w-80 mt-2 bg-white rounded-xl shadow-lg"
          } py-3 z-50`}
        >
          <div className="px-4 py-2 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-topic">មេរៀន STEM</h3>
          </div>
          {stemMenuItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="flex items-start space-x-4 px-4 py-3 hover:bg-gray-100 transition-colors"
            >
              <div className="flex-shrink-0 mt-1">
                <item.icon className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-topic">{item.label}</h4>
                <p className="text-xs text-decribe mt-0.5">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function SearchBar({ isMobile }) {
  return (
    <div className={`relative ${isMobile ? "w-full px-4" : "w-auto"}`}>
      <div className="flex items-center bg-white border rounded-full border-gray-300 shadow-sm hover:shadow-md transition-shadow">
        <Search className="h-4 w-4 text-gray-500 ml-3" />
        <input
          type="text"
          placeholder="ស្វែងរក..."
          className="w-24 sm:w-32 lg:w-40 xl:w-48 px-3 py-2 border-none outline-none focus:ring-0 focus:outline-none bg-transparent text-sm"
        />
        <button className="mx-2 lg:mx-3 bg-primary text-white px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm hover:bg-emerald-500 transition-colors">
          ស្វែងរក
        </button>
      </div>
    </div>
  );
}

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
        aria-expanded={isMenuOpen}
      >
        <span className="text-topic font-suwan text-sm hidden sm:block">
          Soda
        </span>
        <div className="relative">
          <img
            src={cherImage}
            alt="Profile"
            className="lg:h-10 lg:w-10 h-10 w-10 rounded-full border-2 border-gray-200 hover:border-blue-400 transition-colors"
          />
          <ChevronDownIcon
            className={`w-4 h-4 sm:w-5 sm:h-5 absolute -right-4 top-1/2 -translate-y-1/2 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-1 border border-gray-100">
          {profileMenuItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function MainNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isSTEMMenuOpen, setIsSTEMMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <img
                src={logomodified}
                alt="Logo"
                className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 rounded-full hover:opacity-80 transition-opacity"
              />
              <h1 className="text-sm sm:text-base lg:text-lg text-title font-bold">ISTEM</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <STEMDropdown
                  key="stem"
                  isOpen={isSTEMMenuOpen}
                  setIsOpen={setIsSTEMMenuOpen}
                  isMobile={false}
                />
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-topic hover:text-blue-600 transition-colors text-sm xl:text-base whitespace-nowrap"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 xl:space-x-6">
            <div className="hidden lg:block">
              <SearchBar isMobile={false} />
            </div>

            {/* Register */}
            <button className="hidden sm:block bg-primary text-xs lg:text-sm text-white px-2 sm:px-3 lg:px-4 py-2 rounded-full hover:bg-emerald-500 transition-colors transform hover:scale-105 active:scale-95 whitespace-nowrap">
              ចុះឈ្មោះចូលរៀន
            </button>

            {/* Profile */}
            <ProfileMenu />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-4 border-t border-gray-100">
            <div className="px-4 pb-3">
              <SearchBar isMobile={true} />
            </div>
            <div className="space-y-2 px-4">
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <STEMDropdown
                    key="stem"
                    isOpen={isSTEMMenuOpen}
                    setIsOpen={setIsSTEMMenuOpen}
                    isMobile={true}
                  />
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="block py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}