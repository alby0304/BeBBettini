tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#EBB012',
        "primary-dark": defaultTheme.colors.purple,
        secondary: defaultTheme.colors.white,
        "secondary-dark": defaultTheme.colors.black,
        text: defaultTheme.colors.black,
        "text-dark": defaultTheme.colors.white,
        error: defaultTheme.colors.green,
        "error-dark": defaultTheme.colors.green,
        info: defaultTheme.colors.green,
        "info-dark": defaultTheme.colors.green,
        success: defaultTheme.colors.green,
        "success-dark": defaultTheme.colors.green,
        warning: defaultTheme.colors.green,
        "warning-dark": defaultTheme.colors.green,
      }
    },
    backgroundImage: {
      'bgheader': "url('img/1.jpg')",
    }
  }
}
