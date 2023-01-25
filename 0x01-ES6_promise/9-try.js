export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction(), 'Guardrail was processed');
  } catch (mess) {
    queue.push(`Error: ${mess.message}`, 'Guardrail was processed');
  }
  return queue;
}
