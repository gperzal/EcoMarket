import { FiShoppingCart, FiPackage, FiCreditCard, FiRefreshCw, FiUser, FiShield } from "react-icons/fi"

export const faqCategories = [
  {
    title: "Compras",
    icon: FiShoppingCart,
    faqs: [
      {
        question: "¿Cómo realizo una compra?",
        answer:
          "Para realizar una compra, simplemente navega por nuestro catálogo, selecciona el producto que deseas, haz clic en 'Agregar al carrito' y sigue el proceso de checkout. Puedes pagar con tarjeta de crédito, débito o transferencia bancaria.",
      },
      {
        question: "¿Puedo modificar mi pedido después de realizarlo?",
        answer:
          "Puedes modificar tu pedido dentro de las primeras 2 horas después de realizarlo. Para hacerlo, inicia sesión en tu cuenta, ve a 'Mis pedidos' y selecciona la opción 'Modificar pedido'.",
      },
      {
        question: "¿Cómo puedo usar un cupón de descuento?",
        answer:
          "Para usar un cupón de descuento, agrega los productos a tu carrito, ve al checkout y encontrarás un campo para ingresar el código del cupón. Ingresa el código y haz clic en 'Aplicar' para ver el descuento reflejado en tu total.",
      },
    ],
  },
  {
    title: "Envíos",
    icon: FiPackage,
    faqs: [
      {
        question: "¿Cuánto tiempo tarda en llegar mi pedido?",
        answer:
          "El tiempo de entrega depende de tu ubicación. Generalmente, los envíos dentro de la ciudad capital se entregan en 24-48 horas, mientras que los envíos al interior del país pueden tardar entre 3-5 días hábiles.",
      },
      {
        question: "¿Cómo puedo hacer seguimiento de mi pedido?",
        answer:
          "Una vez que tu pedido sea despachado, recibirás un correo electrónico con el número de seguimiento. También puedes iniciar sesión en tu cuenta y ver el estado de tu pedido en la sección 'Mis pedidos'.",
      },
      {
        question: "¿Realizan envíos internacionales?",
        answer:
          "Actualmente solo realizamos envíos dentro del país. Estamos trabajando para expandir nuestros servicios a nivel internacional en el futuro.",
      },
    ],
  },
  {
    title: "Pagos",
    icon: FiCreditCard,
    faqs: [
      {
        question: "¿Qué métodos de pago aceptan?",
        answer:
          "Aceptamos tarjetas de crédito (Visa, Mastercard, American Express), tarjetas de débito, transferencias bancarias y pagos en efectivo a través de puntos de pago como Rapipago y Pago Fácil.",
      },
      {
        question: "¿Es seguro ingresar los datos de mi tarjeta en el sitio?",
        answer:
          "Sí, nuestro sitio utiliza encriptación SSL para proteger tus datos. Además, no almacenamos la información completa de tu tarjeta en nuestros servidores.",
      },
      {
        question: "¿Puedo pagar en cuotas?",
        answer:
          "Sí, ofrecemos la posibilidad de pagar en cuotas sin interés con tarjetas de crédito seleccionadas. Las opciones disponibles se mostrarán durante el proceso de checkout.",
      },
    ],
  },
  {
    title: "Devoluciones",
    icon: FiRefreshCw,
    faqs: [
      {
        question: "¿Cuál es la política de devoluciones?",
        answer:
          "Puedes solicitar una devolución dentro de los 10 días posteriores a la recepción del producto. El producto debe estar en su empaque original y sin señales de uso.",
      },
      {
        question: "¿Cómo solicito una devolución?",
        answer:
          "Para solicitar una devolución, inicia sesión en tu cuenta, ve a 'Mis pedidos', selecciona el pedido correspondiente y haz clic en 'Solicitar devolución'. Sigue las instrucciones para completar el proceso.",
      },
      {
        question: "¿Cuánto tiempo tarda en procesarse el reembolso?",
        answer:
          "Una vez que recibamos el producto devuelto y verifiquemos su estado, procesaremos el reembolso en un plazo de 5-7 días hábiles. El tiempo que tarde en reflejarse en tu cuenta dependerá de tu entidad bancaria.",
      },
    ],
  },
  {
    title: "Cuenta",
    icon: FiUser,
    faqs: [
      {
        question: "¿Cómo creo una cuenta?",
        answer:
          "Para crear una cuenta, haz clic en 'Iniciar sesión' en la parte superior derecha de la página y luego selecciona 'Crear cuenta'. Completa el formulario con tus datos y recibirás un correo de confirmación.",
      },
      {
        question: "Olvidé mi contraseña, ¿cómo la recupero?",
        answer:
          "En la página de inicio de sesión, haz clic en '¿Olvidaste tu contraseña?'. Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.",
      },
      {
        question: "¿Cómo actualizo mis datos personales?",
        answer:
          "Inicia sesión en tu cuenta, ve a 'Mi perfil' y haz clic en 'Editar información'. Allí podrás actualizar tus datos personales, dirección de envío y preferencias.",
      },
    ],
  },
  {
    title: "Privacidad y Seguridad",
    icon: FiShield,
    faqs: [
      {
        question: "¿Cómo protegen mis datos personales?",
        answer:
          "Utilizamos medidas de seguridad técnicas y organizativas para proteger tus datos personales. Nuestra política de privacidad detalla cómo recopilamos, usamos y protegemos tu información.",
      },
      {
        question: "¿Comparten mis datos con terceros?",
        answer:
          "Solo compartimos tus datos con terceros cuando es necesario para procesar tu pedido (por ejemplo, con empresas de envío) o cuando estamos legalmente obligados a hacerlo. No vendemos tus datos a terceros.",
      },
      {
        question: "¿Qué medidas de seguridad utilizan en el sitio web?",
        answer:
          "Nuestro sitio web utiliza certificados SSL para encriptar la información transmitida. Además, implementamos firewalls, sistemas de detección de intrusiones y realizamos auditorías de seguridad periódicas para garantizar la protección de tus datos.",
      },
    ],
  },
]

export const supportCategories = [
  {
    title: "Ayuda con tu compra",
    topics: [
      {
        title: "Proceso de compra",
        description: "Guías paso a paso para realizar tu compra sin problemas.",
        icon: FiShoppingCart,
        url: "/support/buying-process",
      },
      {
        title: "Métodos de pago",
        description: "Información sobre las formas de pago disponibles.",
        icon: FiCreditCard,
        url: "/support/payment-methods",
      },
    ],
  },
  {
    title: "Envíos y entregas",
    topics: [
      {
        title: "Seguimiento de pedidos",
        description: "Cómo hacer seguimiento de tu pedido en tiempo real.",
        icon: FiPackage,
        url: "/support/order-tracking",
      },
      {
        title: "Políticas de envío",
        description: "Tiempos de entrega y costos según tu ubicación.",
        icon: FiPackage,
        url: "/support/shipping-policies",
      },
    ],
  },
  {
    title: "Devoluciones y reembolsos",
    topics: [
      {
        title: "Cómo hacer una devolución",
        description: "Proceso para devolver un producto paso a paso.",
        icon: FiRefreshCw,
        url: "/support/returns",
      },
      {
        title: "Políticas de reembolso",
        description: "Información sobre plazos y condiciones para reembolsos.",
        icon: FiCreditCard,
        url: "/support/refund-policies",
      },
    ],
  },
]

export const searchResults = [
  {
    title: "¿Cómo hacer seguimiento de mi pedido?",
    excerpt:
      "Aprende a hacer seguimiento de tu pedido en tiempo real utilizando nuestro sistema de tracking. Recibirás actualizaciones por email y podrás consultar el estado desde tu cuenta.",
    url: "/support/order-tracking",
  },
  {
    title: "Política de devoluciones",
    excerpt:
      "Conoce nuestra política de devoluciones. Tienes 10 días desde la recepción para solicitar una devolución. El producto debe estar en su empaque original y sin señales de uso.",
    url: "/support/returns",
  },
  {
    title: "Métodos de pago aceptados",
    excerpt:
      "Aceptamos múltiples métodos de pago incluyendo tarjetas de crédito, débito, transferencias bancarias y pagos en efectivo a través de puntos de pago.",
    url: "/support/payment-methods",
  },
]
