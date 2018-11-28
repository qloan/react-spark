export default {
  'default': {
    'pattern': null,
    'placeholder': null
  },
  'monetary': {
    'pattern': '(^\\$?(\\d+|\\d{1,3}(,\\d{3})*)(\\.\\d+)?$)|^$',
    'placeholder': null
  },
  'phone': {
    'pattern': '(^(\\+\\d{1,2}\\s)?((\\(\\d{3}\\))|\\d{3})[\\s.-]?\\d{3}[\\s.-]?\\d{4}$)|^$',
    'placeholder': '(000) 000-0000'
  },
  'date': {
    'pattern': '^(((0[1358]|1[02])([\\/-]?)(0[1-9]|[12]\\d|3[01])|(0[469]|11)([\\/-]?)(0[1-9]|[12]\\d|30)|02(\\/?)((0?\\d)|[12]\\d))(\\4|\\7|\\9)[12]\\d{3})?$',
    'placeholder': 'MM/DD/YYYY'
  }
}
