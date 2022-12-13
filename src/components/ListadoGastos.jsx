import Gasto from './Gasto';

function ListadoGastos({
	gastos,
	setGastoEditar,
	elimianarGasto,
	gastosFiltrados,
	filtro,
}) {
	return (
		<div className="listado-gastos contenedor">
			{filtro ? (
				<>
					<h2>
						{gastosFiltrados.length
							? 'Gastos'
							: 'No hay Gastos en esta categoria'}
					</h2>
					{gastosFiltrados.map(gasto => (
						<Gasto
							gasto={gasto}
							key={gasto.id}
							setGastoEditar={setGastoEditar}
							elimianarGasto={elimianarGasto}
						/>
					))}
				</>
			) : (
				<>
					<h2>{gastos.length ? 'Gastos' : 'No hay Gastos aún'}</h2>
					{gastos.map(gasto => (
						<Gasto
							gasto={gasto}
							key={gasto.id}
							setGastoEditar={setGastoEditar}
							elimianarGasto={elimianarGasto}
						/>
					))}
				</>
			)}
		</div>
	);
}

export default ListadoGastos;
