<script lang="ts">
  export let text: string;
  export let messageDate;
  function verifyDate(timeStamp): string {
    let dateSent;
    if (timeStamp != null) {
      dateSent = new Date(timeStamp.seconds * 1000);
    } else {
      dateSent = new Date();
    }

    const currentDate = new Date();
    if (
      dateSent.getUTCDate() == currentDate.getUTCDate() &&
      dateSent.getUTCMonth() == currentDate.getUTCMonth() &&
      dateSent.getUTCFullYear() == currentDate.getUTCFullYear()
    ) {
      return dateSent.toLocaleTimeString();
    } else {
      return (
        dateSent.toLocaleDateString() + ", " + dateSent.toLocaleTimeString()
      );
    }
  }
  const timeText = verifyDate(messageDate);
</script>

<div
  class="rounded-t-2xl rounded-br-2xl text-white p-4 w-1/2 text-left ml-10 my-5 rounded-2xl bg-slate-700"
  id="chatbox"
>
  <div>
    {text}
  </div>
  <div class="text-slate-400 text-xs text-right mr-2 mt-2">{timeText}</div>
</div>
