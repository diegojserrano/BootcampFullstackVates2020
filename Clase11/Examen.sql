create database Examen
go

use Examen
go

create table Articulos (
    IdArticulo int identity(1,1) primary key,
    Nombre varchar(50) not null,
    Precio real not null
)

GO

create table Compras (
    IdCompra int identity(1,1) primary key,
    IdArticulo int not null,
    Cantidad int not null,
    FOREIGN key (IdArticulo) references Articulos(IdArticulo)
)
GO


