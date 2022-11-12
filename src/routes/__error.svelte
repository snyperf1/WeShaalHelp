<script context="module">
  export let page;
  export let status;
  export async function load(test) {
    console.log(test);
    page = test.url.href;
    status = test.status;
    return {};
  }
</script>

<h1 class="text-white text-6xl font-bold m-10">OOPS!</h1>
<p class="text-white mt-20 m-10">
  Sorry, we do not know what happened, but error <span
    class="text-red-400 font-semibold">{status}</span
  >
  occured when you tried to access the link
  <span class="text-indigo-300">"{page}"</span>.
</p>

<p class="text-white mt-20 m-10">
  Click on this <a class="text-bold text-indigo-300" href="/login">link</a> to sign
  up again, or you can just press the back button to go to the previous page.
</p>
