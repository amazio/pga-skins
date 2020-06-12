export function getInitials(name) {
  let initials =  name.split(' ').map(nm => nm[0].toUpperCase()).join('');
  if (name.includes(',')) initials = initials.split('').reverse().join('');
  return initials;
}