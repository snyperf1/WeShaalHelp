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
      return "Today, " + dateSent.toLocaleTimeString();
    } else {
      return (
        dateSent.toLocaleDateString() + ", " + dateSent.toLocaleTimeString()
      );
    }
  }
  const timeText = verifyDate(messageDate);
</script>

<div class="flex justify-end">
  <div
    class=" rounded-t-2xl rounded-bl-2xl text-white bg-indigo-500 p-4 w-1/2 mr-10 my-2"
  >
    <div>
      {text}
    </div>
    <div class="text-indigo-200 text-xs text-right mr-2 mt-2">{timeText}</div>
  </div>
</div>
