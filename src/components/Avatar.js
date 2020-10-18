import React from 'react'

export default ({ primaryColor = '#C01701', shadowColor = '#760B39' }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 218 218"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="218"
        height="218"
      >
        <circle cx="109" cy="109" r="109" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0)">
        <path
          d="M-9 193.589V160.255C-7.956 148.585 -7.51467 136.874 -7.728 125.177C-8.04667 107.851 -1.02267 98.4499 15.5387 95.8685C17.0707 95.6312 18.556 94.9565 20.0973 94.9072C29.9347 94.5912 30.068 94.9432 31.636 83.5192C33.42 70.5072 37.5013 58.0939 44.5067 47.3525C51.9013 36.0152 62.5867 27.6685 77.2733 27.6832C91.252 27.6979 105.5 25.6645 119.159 28.5445C140.885 33.1245 158.845 43.8499 167.669 65.7965C168.604 68.1219 169.752 70.2339 171.752 71.7579C181.219 78.9725 186.585 88.5579 188.333 100.255V116.255C187.189 122.363 185.071 127.921 181.3 133.078C177.969 137.634 178.876 143.542 180.044 148.563C184.695 168.574 181.125 188.173 178.047 207.85C176.237 219.417 174.081 230.927 172.675 242.558C171.763 250.097 169.995 257.373 165.591 263.761C161.711 270.343 155.785 272.963 148.336 272.829C143.695 272.742 139.048 272.826 134.404 272.823C120.964 272.813 117.552 270.531 112.399 258.165C110.081 252.627 109.053 246.846 109.081 240.838C109.093 238.07 108.551 235.102 105.013 235.274C101.435 235.447 102.336 238.739 102.248 240.933C102.003 247.057 102.633 253.234 100.884 259.253C98.412 272.889 87.544 282.886 73.456 284.574C61.844 285.966 50.9027 283.339 40.6227 278.335C35.1573 275.674 32.6 270.313 31.8947 264.239C31.756 256.062 30.2693 247.987 30.052 239.807C29.928 235.127 27.6707 232.181 22.544 232.835C6.248 234.911 -5.704 222.134 -7.67333 205.285C-8.128 201.389 -7.68933 197.383 -9 193.589Z"
          fill="#010000"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M56.0997 57.4969C63.9837 47.6129 72.997 40.2275 86.8997 42.1489C92.1383 42.8729 97.5197 42.7942 102.83 42.7182C117.828 42.5022 130.544 47.6129 140.849 58.5502C141.992 59.7635 144.258 60.7755 143.408 62.7409C142.633 64.5342 140.338 64.2635 138.604 64.2462C126.865 64.1275 115.101 63.2222 103.448 65.5235C98.4557 66.5089 93.3183 67.0195 88.493 68.5369C80.421 71.0769 74.8903 77.0808 74.0957 85.2448C72.5903 100.698 72.4517 116.11 80.945 130.392C84.633 136.596 89.929 139.948 95.8303 142.897C109.98 149.969 124.69 148.185 139.373 145.089C145.642 143.768 152.008 142.508 157.98 140.28C164.234 137.945 164.802 140.802 164.308 145.649C163.836 154.893 163.144 164.032 160.768 173.114C155.821 192.037 147.748 198.297 128.638 201.284C112.201 203.852 96.7677 199.829 81.1997 197.01C72.2543 195.392 67.5037 186.698 64.085 178.816C57.705 164.102 54.625 148.553 52.5597 132.544C50.813 119.004 51.1357 105.545 50.2343 92.0742C49.4197 79.9155 54.0597 68.9955 56.0997 57.4969Z"
          fill={primaryColor}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M56.0997 57.4968C56.6477 63.7795 55.4077 69.8182 53.321 75.6742C52.6277 77.6195 52.4183 79.5208 52.3223 81.5155C51.357 101.701 52.321 121.874 55.4063 141.761C57.4863 155.162 60.1904 168.955 67.057 180.819C71.785 188.987 77.5063 196.966 89.801 196.642C99.089 196.395 108.214 201.643 117.901 200.165C125.488 199.007 133.258 199.738 140.716 196.893C148.842 193.793 153.75 188.199 156.481 180.265C159.873 170.41 161.877 160.258 162.986 149.915C163.149 148.393 162.868 146.762 164.308 145.649C167.956 174.605 165.014 202.985 157.018 230.953C155.466 236.383 156.658 241.995 156.534 247.521C156.322 256.833 155.028 258.286 146.016 259.158C143.376 259.411 140.748 259.923 138.102 260.002C127.877 260.307 123.99 256.738 124.398 246.377C124.682 239.138 124.718 231.511 134.384 228.963C138.416 227.901 141.772 224.533 146.033 220.107C137.868 221.177 131.341 221.607 124.784 221.603C116.989 221.597 109.333 220.785 101.713 219.274C98.6477 218.666 95.5024 218.447 92.4584 219.223C89.265 220.041 87.1797 221.699 86.7383 225.55C85.801 233.711 85.2783 241.843 85.5343 250.058C85.893 261.55 79.0584 268.695 67.3637 269.426C61.197 269.811 55.5783 267.938 50.045 265.497C47.8557 264.531 47.4383 262.926 47.161 260.781C41.581 217.581 41.297 174.182 41.7837 130.722C41.9957 111.857 44.313 93.3568 49.0357 75.1795C50.6197 69.0848 53.7023 63.3808 56.0997 57.4968Z"
          fill={shadowColor}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.1744 126.8C28.2571 149.428 28.2798 172.058 28.4744 194.684C28.5144 199.314 29.3211 203.932 29.5584 208.568C30.0091 217.334 25.2411 220.386 17.0158 216.534C10.6451 213.55 7.6571 209.195 6.4771 201.404C2.84243 177.399 5.99043 153.69 7.2131 129.871C7.24377 129.283 7.81043 128.723 8.1251 128.15C11.4504 128.35 14.4838 127.127 17.6118 126.29C21.1518 125.34 24.7718 124.264 28.1744 126.8Z"
          fill={shadowColor}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M175.088 101.523C177.359 110.079 173.39 119.235 163.935 123.824C147.714 131.698 130.648 136.091 112.459 131.919C103.466 129.856 96.3378 124.336 90.5298 117.555C83.2578 109.07 85.5485 88.5455 93.8991 81.8362C96.8458 83.3335 97.2631 86.3095 98.0738 89.0362C102.922 105.335 109.779 110.51 126.878 110.416C138.155 110.355 149.32 108.818 160.498 107.492C165.946 106.846 170.208 103.466 175.088 101.523Z"
          fill="#4A646E"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M175.089 101.523C171.814 107.559 165.634 108.887 159.889 109.57C147.83 111 135.721 112.275 123.515 112.138C109.25 111.976 100.906 105.747 97.0125 91.9762C96.0525 88.5749 94.9432 85.2149 93.8992 81.8362C107.269 79.0842 120.521 75.1069 134.349 76.1349C144.501 76.8909 154.393 79.3509 163.123 84.8562C169.245 88.7162 173.895 93.9642 175.089 101.523Z"
          fill="#98C7DC"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.1745 126.8C23.0265 126.708 18.0771 127.579 13.2425 129.435C11.5105 130.1 8.93713 132.031 8.12646 128.148C8.42513 125.971 8.63713 123.776 9.03846 121.619C10.8238 112.042 18.0318 107.875 27.2798 110.83C29.7251 111.61 29.4131 113.267 29.2718 114.988C28.9478 118.928 28.5451 122.863 28.1745 126.8Z"
          fill={primaryColor}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M147.926 97.5841C141.348 96.8574 132.842 95.8041 124.307 95.0227C119.834 94.6121 118.908 91.7067 118.9 88.1281C118.895 83.9694 121.551 81.5134 125.262 80.9161C135.516 79.2667 145.37 81.9374 155.164 84.5214C157.287 85.0814 159.23 86.3201 160.61 88.1681C161.943 89.9521 163.476 91.8241 162.432 94.1934C161.358 96.6241 159.358 97.8107 156.55 97.6147C154.342 97.4601 152.115 97.5841 147.926 97.5841Z"
          fill="#FBFDFC"
        />
      </g>
    </svg>
  )
}