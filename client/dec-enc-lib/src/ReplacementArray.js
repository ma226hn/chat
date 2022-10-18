// The main string used to replace the messege's chars.
const codingStr = 'å1äö-åä2p-åä3o-åä4i-åä5u-å7äy-åä8t-åär9-åäe0-åä4w-ådäq-psöl-pögk-paöj-peöh-puöf-p2öd-p7ös-p9öa-ol0i-o+lu-o0ly-o#lr-o"le-o%lw-o(lw-o1lq-i5km-ik8n-ik9v-i*kc-i!kx-i#kz-uj%m-yj7m-th2n-r7gn-r9fb-e7fb-w4dv-w1sc-q5ac-a2qz-ax6w-ac1e-ajvr-a7bt-adyn-a2uk-aohm-se4d-srdf-stgh-sysh-sujj-ssol-dhrf-djtg-devf-dhyj-dgmt-dkim-do5p-fdrt-f"ev-f%yu-f@io-f&op-f3hg-f6mj-fl2m-ö6mb-zuaq-z4sw-z3se-z7de-zsfr-z#gt-z&hy-z3ju-z5ju-z7ki-z8lo-z9öp-x0sd-x7df-x9fg-x7gh-x0hj-1+äö-2ä+p-37åä-49åi-50åä-6+äy-7fåt-8åär-94äe-15åw-å3äq-75öl-ö39k-0göj-p54ö-jp1f-pa4ö-ptö7-öh1a-lö5i-oh7u-o9wl-og0r-2jle-6alw-oh4w-o6sl-ih8k-0akn-2hkv-2g2c-3hk4-4hkz-a6jm-gy6m-w7hn-58gn-r<f5-5hfb-wd6v-7gsc-qj9c-9k9z-2r2w-az56-25hv-8e8t-2h4n-as72-0h1m-347d-644f-2s0g-s2jh-46uj-sdo6-2h3r-dj01-dz43-o68j-d3mt-j0im-a3op-7n6t-4tev-f62u-fs3o-0gop-7s3g-9gmj-f04m-0fmb-z4sq-1t23-120s-99f0-g?a&-;hgt-j>hy-d>ju-hz*u-zj^i-szl@-fz#p-xs|d-xf+f-h=fg-hx%h-wx?j'
export const replacementArray = codingStr.split('-') // convert string to array to facilitate its use.
// Shuffle array elements with certain number which depends on the value of the chars in the message.





export function shuffleArray (matrix, mValue) {
  let buffer = ''
  const shuffleCounter = mValue % 10

  for (let i = 0; i < shuffleCounter; i++) {
    buffer = matrix[matrix.length - 1]
    matrix.unshift(buffer)

    matrix.pop()
  }
}
