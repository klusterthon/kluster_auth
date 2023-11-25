export default function LayoutHeader({ children }: React.PropsWithChildren) {
	return (
		<header className="flex items-center p-4">
			<div className="flex-1" />
			{children}
		</header>
	);
}