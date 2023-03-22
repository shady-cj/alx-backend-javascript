export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const mtreturn = mathFunction();
    queue.push(mtreturn);
  } catch (err) {
    queue.push(`Error: ${err.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
