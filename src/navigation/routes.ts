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
  MESSAGE = 'Message',
  HOME = 'Home',
}

enum StaffRoutes {
  LEAVE_STATUS = 'leave_status',
}

export { RootRoutes, AuthRoutes, MainRoutes, TabRoutes, StaffRoutes };
