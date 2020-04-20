export const cpfMask = value => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
};
  
export const rgMask = value => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{1})\d+?$/, '$1');
};
  
export const telMask = v => {
    let r = v.replace(/\D/g, '');
    r = r.replace(/^0/, '');
    if (r.length > 10) {
      // 11+ digits. Format as 5+4.
      r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (r.length > 5) {
      // 6..10 digits. Format as 4+4
      r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    } else if (r.length > 2) {
      // 3..5 digits. Add (..)
      r = r.replace(/^(\d\d)(\d{0,5})/, '($1) $2');
    } else {
      // 0..2 digits. Just add (
      r = r.replace(/^(\d*)/, '($1');
    }
    return r;
};

export const cnpjMask = valor => {
    return valor
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1/$2')
        .replace(/(\d{4})(\d{1,2})/, '$1-$2');
}

export const realMask = v => {
  v = v.replace(/\D/g,"");
  v = new String(Number(v));
  var len = v.length;
  if (1== len)
    v = v.replace(/(\d)/,"0.0$1");
  else if (2 == len)
    v = v.replace(/(\d)/,"0.$1");
  else if (len > 2) {
    v = v.replace(/(\d{2})$/,'.$1');
  }
  return v;
}

