(() => {
  const mobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  if (mobile) document.getElementById('mobile-action').hidden = false;
  const button = document.getElementById('copy-command');
  const command = document.getElementById('purchase-command');
  const status = document.getElementById('copy-status');
  button.hidden = false;
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(command.value);
      status.textContent = '已複製，請貼到隨LINE AI 聊天室並送出。';
    } catch {
      command.focus(); command.select(); command.setSelectionRange(0, command.value.length);
      status.textContent = '已選取購買文字，請長按或按 Ctrl+C 複製，再貼到 LINE。';
    }
  });
})();
