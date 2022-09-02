<script>
  import Statsprogress from "$lib/components/statistics/Statsprogress.svelte";
  export let value;
  export let capacity;
  export let color;
  export let maincolor;
  export let opacity;
</script>

<div
  class="card mr-10 flex flex-col h-44 w-72 rounded-3xl bg-slate-700 text-white p-4"
>
  <div class="justify-between flex max-h-12 min-w-full flex-row align-middle">
    <div
      class="p-1 flex h-8 w-8 items-center justify-center bg-opacity-20 {color} rounded-md"
    >
      <svg
        class=""
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="17.4956"
          width="16.8704"
          height="4.95586"
          rx="2.47793"
          transform="rotate(-45 0 17.4956)"
          fill={maincolor}
        />
        <path
          d="M15.5996 2.33609C14.4372 1.8875 13.153 1.8567 11.9657 2.24894C10.7785 2.64118 9.76166 3.43219 9.08853 4.4872C8.4154 5.5422 8.1276 6.79592 8.27417 8.03474C8.42074 9.27356 8.99261 10.4208 9.89235 11.2811C10.7921 12.1413 11.964 12.6613 13.2084 12.7524C14.4529 12.8435 15.6928 12.5002 16.717 11.7808C17.7412 11.0614 18.4863 10.0106 18.8252 8.80734C19.1642 7.60407 19.0761 6.32283 18.576 5.18191L15.5995 8.31124L13.6324 7.37122L12.6246 5.74633L15.5996 2.33609Z"
          fill={maincolor}
        />
      </svg>
    </div>

    <button>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.6371 8.38771C11.1496 8.87521 11.1496 9.66271 11.6371 10.1502L16.4871 15.0002L11.6371 19.8502C11.1496 20.3377 11.1496 21.1252 11.6371 21.6127C12.1246 22.1002 12.9121 22.1002 13.3996 21.6127L19.1371 15.8752C19.6246 15.3877 19.6246 14.6002 19.1371 14.1127L13.3996 8.37521C12.9246 7.90021 12.1246 7.90021 11.6371 8.38771Z"
          fill="#FFFFFF"
        />
      </svg>
    </button>
  </div>
  <strong class="text-white text-xs mt-2 font-medium"
    >Classes with broken appliances</strong
  >
  <Statsprogress
    {value}
    {capacity}
    --color={color}
    --main-color={maincolor}
    --opacity-color={opacity}
  />
</div>
