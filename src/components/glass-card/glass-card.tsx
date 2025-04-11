import { component$, Slot } from "@builder.io/qwik";

export const GlassCard = component$(() => {
    return (
    <section 
    style={{
        backgroundColor: "rgba(255, 255, 255, 0.1);",
        padding: "2rem",
        backdropFilter:"blur(10px)",
        WebkitBackdropFilter: "blur(10px)", /* Difuminado estilo vidrio */
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        textAlign: "center",
        width: "60%",
        color: 'white',
      }}
    >
     <Slot/>  
    </section> 
  );
});