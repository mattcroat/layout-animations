export function formatCase(string, caseType) {
  if (caseType === 'kebab') {
    return string.toLowerCase().replaceAll(' ', '-')
  }

  if (caseType === 'camel') {
    return string
      .replaceAll('-', ' ')
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.substr(1))
      .join(' ')
  }

  return string
}
