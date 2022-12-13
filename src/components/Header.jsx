import ControlPresupuesto from './ControlPresupuesto';
import NuevoPresupuesto from './NuevoPresupuesto';

function Header({
	gastos,
	presupuesto,
	setPresupuesto,
	isValidPresupuesto,
	setIsValidPresupuesto,
	setGastos,
}) {
	return (
		<header>
			<h1>Planificador de Gastos</h1>
			{isValidPresupuesto ? (
				<ControlPresupuesto
					gastos={gastos}
					presupuesto={presupuesto}
					setGastos={setGastos}
					setPresupuesto={setPresupuesto}
					setIsValidPresupuesto={setIsValidPresupuesto}
				/>
			) : (
				<NuevoPresupuesto
					presupuesto={presupuesto}
					setPresupuesto={setPresupuesto}
					setIsValidPresupuesto={setIsValidPresupuesto}
				/>
			)}
		</header>
	);
}

export default Header;
