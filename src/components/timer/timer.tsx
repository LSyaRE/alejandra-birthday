import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { get } from 'http';
import { GetBirthday } from '~/services/get-birthday';

function getBirthday() {
    const birthday = new GetBirthday(); // o cualquier lógica tuya
    return birthday.nextBirthday;
}

export const CountdownTimer = component$(() => {
  const timer = useSignal('Cargando temporizador...');

  const targetDate = getBirthday(); // Cambia esto a la fecha que desees

  useVisibleTask$(() => {
    const updateTimer = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        timer.value = '¡El tiempo ha llegado!';
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      timer.value = `${days} día${days !== 1 ? 's' : ''}, ${hours} hora${hours !== 1 ? 's' : ''}, ` +
        `${minutes} minuto${minutes !== 1 ? 's' : ''} y ${seconds} segundo${seconds !== 1 ? 's' : ''} restantes`;
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval); // Limpieza cuando el componente se destruye
  });
    // 
  return (
    <div ><h2>{timer.value}</h2></div> 
  );
});
