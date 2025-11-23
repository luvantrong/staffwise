enum RootRoutes {
  AUTH = 'auth',
  MAIN = 'main',
}

enum AuthRoutes {
  LOGIN = 'login',
}

enum MainRoutes {
  DRAWER_TAB = 'drawer_tab',
  STAFF = 'staff',
  ADMIN = 'admin',
  MANAGER = 'manager',
}

enum TabRoutes {
  CHAT = 'Chat',
  HOME = 'Home',
}

enum StaffRoutes {
  HOME = 'home',
  LEAVE_STATUS = 'leave_status',
  ADDITIONAL_LEAVE = 'additional_leave',
}

export { RootRoutes, AuthRoutes, MainRoutes, TabRoutes, StaffRoutes };
