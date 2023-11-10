> **ONLINE TICKET RESERVATION SYSTEM**

**19CSE202 DBMS Project**

> ![](media/image1.jpeg){width="3.216666666666667in"
> height="2.283333333333333in"}

**Team: 5**

**B-Tech / II Year CSE/III Semester**

> **Database Management Systems, Amrita School of Engineering,
> Coimbatore**

  -----------------------------------------------------------------------
  **Roll Number**                     **Name**
  ----------------------------------- -----------------------------------
  CB.EN.U4CSE20068                    HARSHITH THATAVARTHI

  CB.EN.U4CSE20020                    GADDE ASHOK

  CB.EN.U4CSE20037                    DUSHYANTH REDDY M

  CB.EN.U4CSE20038                    M V S VINEETH
  -----------------------------------------------------------------------

**[TABLE OF CONTENTS]{.underline}**

**[\
]{.underline}**

**[ABSTRACT]{.underline}**

My Train

The project presents a software program Online Ticket Reservation System
which can be used for booking train tickets and the facilities like seat
reservation and various type of route enquiries are available where all
these are managed through database system and all the details of
customer and reservation details are available in the database. Seat
cancellation facility is available in the interface and additional
facilities like sending ticket to email and notifying the customers in
prior to journey. Customer can travel according to his choice of class
available. A customer can login to his/her account and can select the
source and destination stations for a specified date and can select a
train of his choice and then select the class and confirm availability.

Upon, availability a customer can pay the corresponding fee and confirm
his/her ticket. If there is any update on delay or cancellation of
train, customers gets notified in prior. Our database gets updated time
to time. On-line reservation has made the process for the reservation of
seats very much easier than ever before. There are number of counters
for the reservation of seats and one can easily make reservations and
get tickets. This project contains entity relationship model diagram
based on railway reservation system. Design of database of the railway
reservation system based on relational model.

[Functionalities Of System:]{.underline}

The available classes for a train are Second Sitting(2S), Sleeper(SL),
AC Chair Car(CC), AC 3 Economy(3E), AC 3 Tier(3A), AC 2 Tier(2A), AC
First Class(FC). The various types of trains available are Express,
Shatabdi and Super-Fast Express, so that customer can choose his choice
of train type. There will be two types of logins as customer type and
administrator. A customer can register into the platform using
registration portal. The administrator can be able to do the following:
Create a train's pool by providing the details of all trains, assign
seats to customers, update the changes in the seat availability. Admin
can also make announcements on the status of trains.

If a customer forgets his login password then he can reset his password
either using mobile number or email address specified earlier while
creation of account. The customer can be able to do the following:
Login/Register to the site, submit the journey details, select the train
and class and book the seat. The main purpose of maintaining database
for Railway Reservation System is to reduce manual errors involved in
the booking and cancelling of tickets and make it convenient for the
customers and providers to maintain the data about their customers and
also about the seats available to them .Due to automation many loopholes
that exist in the manual maintenance of the records can be removed. To
solve the problem we design a data base which includes customer details,
availablity of seats in trains, no of trains and their details.

[Modules In System:]{.underline}

-   Train Module -- This module manages all the data of train names,
    ID's, schedules and their management and availability.

-   User Module -- It consists of user info, username, passwords and
    previous bookings.

-   Admin Module -- It manages all the payments, bookings,
    cancellations, trains and agents.

-   Booking Module -- This module is used for generating the user's
    booking of ticket.

-   Ticket Module -- This module assigns the validation and generation
    of ticket with ID.

-   Payment Module -- This module manages the transactions of users with
    payment.

[Benefits Of System:]{.underline}

-   Tickets can be booked through online portals from the comfort of
    customer being at home and with the ease of computer rather than
    standing in queues at ticket counters.

-   Buying tickets through a reliable website which uses secure payment
    gateway is safe and gives insurance to your transaction so you can
    easily use credit/ debit cards and other safe payment methods.

-   Customers receive a printable e-ticket through mail so they can
    easily access their ticket in their smartphone.

-   In case of any discrepancy, an effective customer support is
    available and good customer relationship is maintained.

-   Payments made through this system are safe and secure.

[Development Platform:]{.underline}

-   For Database - SQL

-   For User Interface - HTML, CSS, Javascript.

**[INTRODUCTION]{.underline}**

-   Database is an organized collection of data. The data is typically
    organized to model aspects of reality in a way that supports
    processes requiring information. A DBMS makes it possible for end
    users to create, read, update and delete data in a database. The
    DBMS essentially serves as an interface between the database and end
    users or application programs, ensuring that data is consistently
    organized and remains easily accessible.

-   The DBMS manages three important things: the data, the database
    engine that allows data to be accessed, locked and modified and the
    database schema, which defines the database\'s logical structure.
    These three foundational elements help provide concurrency,
    security, data integrity and uniform administration methods. The
    DBMS can offer both logical and physical data independence.

-   That means it can protect users and applications from needing to
    know where data is stored or having to be concerned about changes to
    the physical structure of data. The main purpose of maintaining
    database for Railway Reservation System is to reduce the manual
    errors involved in the booking and cancelling of tickets and make it
    convenient for the customers and providers to maintain the data
    about their respective customers and detailing them about the seats.

-   The speed of obtaining and processing the data will be fast. For
    future expansion the speed of obtaining and processing the data will
    be fast. So finally we will be designing a database which consists
    of customer details , available seats etc..

**[PROJECT DESCRIPTION]{.underline}**

-   This project is about creating the database about Railway
    Reservation System. The railway reservation system facilitates the
    passengers to enquire about the trains available on the basis of
    source and destination, booking and cancellation of tickets, enquire
    about the status of the booked ticket, etc. The aim of case study is
    to design and develop a database maintaining We records of different
    trains, train status, and passengers. The record of train includes
    its number, name, source, destination, and days on which it is
    available.

-   Passengers can book their tickets for the train in which seats are
    available. For this, passenger has to provide the desired train
    number and the date for which ticket is to be booked. Before booking
    a ticket for a passenger, the validity of train number and booking
    date is checked. Once the train number and booking date are
    validated, it is checked whether the seat is available. If yes, the
    ticket is booked with confirm status and corresponding ticket ID is
    generated which is stored along, with other details of the
    passenger. The ticket once booked can be cancelled at any time. For
    this, the passenger has to provide the ticket ID (the unique key).
    The ticket ID is searched and the corresponding record is deleted.
    With this, the first ticket with waiting status also gets confirmed.

-   List of Assumption Since the reservation system is very large in
    reality, it is not feasible to develop the case study to that extent
    and prepare documentation at that level. Therefore, a small sample
    case study has been created to demonstrate the working of the
    reservation system. To implement this sample case study, some
    assumptions have been made, which are as follows:

1.  The number of trains has been restricted to 5.

2.  The booking is open only for next seven days from the current date.

3.  Only two categories of tickets can be booked, namely, AC and
    General.

4.  The total number of tickets that can be booked in each category (AC
    and General) is 10.

5.  The total number of tickets that can be given the status of waiting
    is 2.

6.  The in- between stoppage stations and their bookings are not
    considered.

-   List of trains has to be maintained. Detailed Passenger information
    is to be maintained in the booking procedure, the train number,
    train date, and category are read from the passenger. If the desired
    category is AC, then total number of AC seats and number of booked
    AC seats are compared in onder to find whether ticket can be booked
    or not. Similarly, it can be checked for the general category. If
    ticket can be booked, then passenger details are read and stored in
    the Passenger table. In the cancellation procedure, ticket ID is
    read from the passenger and corresponding record is searched in the
    Passenger. If the record exists, it is deleted. After deleting the
    record (if it is confirmed), first record with waiting status for
    the same train and same category are searched from the Passenger
    table and its status is changed to confirm.

**[SCHEMA DIAGRAM]{.underline}**

![](media/image2.png){width="6.6930555555555555in"
height="5.891666666666667in"}

**[\
]{.underline}**

**[LIST OF ENTITIES AND ATTRIBUTES]{.underline}**

[ENTITIES]{.underline} [ATTRIBUTES]{.underline}

1)TRAIN Train_ID

Train_name

Train_seatnumber

Train_type

Train_description

2)TICKET Ticket_ID

Ticket_CustomerID

Ticket_Type

Ticket_Date

Ticket_Description

3)BOOKING Booking_ID

Booking_Type

Booking_Date

Booking_Description

Booking_Startstation

Booking_Endstation

4)TRAIN ROUTE Train_ID

Trainroute_Description

Trainroute_Name

5)CUSTOMER Customer_ID

Customer_Name

Customer_Mobile

Customer_Email

Customer_Username

Customer_Password

Customer_Address

6)PAYMENT Payment_ID

Payment_CustomerID

Payment_Date

Payment_Amount

Payment_Description

7)AVAILABLE Available_TrainID

Available_Seats

Available_Type

8)CANCELLATION Cancellation_ID

Cancellation_BookingID

Cancellation_Refund

Cancellation_Policy

9)ADMIN Admin_ID

Payments

Cancellations

Bookings

10)TRAINMANAGEMENTS Train_ID

Train_Schedule

Train_Alteration

Train_Addition

11)NEW AGENT Agent_ID

Agent_Name

Agent_Address

Agent_Mobile

Agent_Email

Agent_Username

12)PREVIOUS TRIPS Trip_ID

Trip_TrainID

Trip_Date

Trip_Route

Trip_Description

**\
[ER DIAGRAM]{.underline}**

![](media/image3.jpeg){width="6.691666666666666in"
height="5.908333333333333in"}**[\
]{.underline}**

**[NORMALISATION]{.underline}**

-   Database schema before Normalisation:

**Ticket Reservation System** (AgentMobile, AgentEmail, AgentID,
AgentAdminId, AgentAge, FistName, LastName, Street, City, State,
Cancellation, Payment, Bookings, AdminId, BookingDate, BookingId,
BookingType, BookingUserId, BookingStartStation, BookingEndStation,
BookingDescription, TrainRouteName, TrainRouteDescription, TrainId,
AvailableTrainId, AvailableType, AvailableSeats, TrainSeatNumber,
TrainBookingId, TrainName, TrainType, PaymentId, PaymentDate,
PaymentBookingID, PaymentFare, TicketId, TicketDate, TicketDesc,
TicketType, TicketCustomerId, UserEmail, UserId, UserName, UserMobile,
CancellationTicketId, CancellationBookingId, CancellationId,
CancellationPolicy, CancellationRefund, TripUserId, TrainTrainId,
TripRoute, TripDate, TripDesc, SignupUsername, SignupName, SignupMobile,
SignupEmail, SignupAddress)

> **[1^st^ NORMALISATION]{.underline}**

1.  The relation has primary key -- (User_ID)

2.  AgentId, AdminId, BookingId, Username, TrainId, PaymentId, TicketId,
    CancellationId, SignupUsername attributes are non-atomic, so we have
    to maintain these attributes in a separate table.

3.  City, State, and Street attributes have repeated two times, so one
    duplicate must be removed

4.  FirstName, LastName attributes have repeated three times, so two
    duplicates must be removed

To remove all the non-atomic attributes and the duplicates the tables
are decomposed as follows:

1.  **Ticket Reservation System** (Street, City, State, BookingDate,
    BookingType, BookingUserId, BookingStartStation, BookingEndStation,
    BookingDescription, TrainRouteName, TrainRouteDescription,
    AvailableTrainId, AvailableType, AvailableSeats, TrainSeatNumber,
    TrainBookingId, TrainName, TrainType, PaymentDate, PaymentBookingID,
    PaymentFare , TicketDate, TicketDesc, TicketType, TicketCustomerId,
    UserEmail, UserId, UserMobile, CancellationTicketId,
    CancellationBookingId, CancellationPolicy, CancellationRefund,
    TripUserId, TrainTrainId, TripRoute, TripDate, TripDesc, SignupName,
    SignupMobile, SignupEmail, SignupAddress)

**Functional Dependencies:**

-   **UserId** FirstName, LastName, BookingDate, BookingType,
    BookingUserId, BookingStartStation, BookingEndStation,
    BookingDescription, TrainRouteName, TrainRouteDescription,
    TrainBookingId, TrainName, TrainType, PaymentDate, PaymentBookingID,
    PaymentFare , TicketDate, TicketDesc, TicketType, TicketCustomerId,
    TripUserId, TrainTrainId

-   **TrainId** TrainRouteName, TrainRouteDescription, TrainId,
    AvailableTrainId, AvailableType, AvailableSeats, TrainSeatNumber,
    TrainBookingId, TrainName, TrainType, TrainSchedule,
    TrainAlteration, TrainAddition

-   **BookingId** BookingDate, BookingId, BookingType, BookingUserId,
    BookingStartStation, BookingEndStation, BookingDescription

-   **TicketId** TicketDate, TicketDesc, TicketType, TicketCustomerId

-   **PaymentId** PaymentDate, PaymentBookingID, PaymentFare

-   **CancellationId** CancellationTicketId, CancellationBookingId,
    CancellationId, CancellationPolicy, CancellationRefund

**2.Agent** (AgentMobile, AgentEmail, AgentID, AgentAdminId, AgentAge,
FistName, LastName, Street, City, State)

**Functional Dependencies:**

-   **AgentId** AgentMobile, AgentEmail, AgentAge

-   **AgentMobile, AgentEmail** AgentId

-   **First Name,Last Name, AgentMobile** AgentId

**3.SignUp** (SignupUsername, SignupName, SignupMobile, SignupEmail,
SignupAddress)

**Functional Dependencies:**

-   **SignupEmail**SignupUsername

-   **SignUpName, SignUpMobile** SignupUsername

**4.Admin (**Cancellation, Payment, Bookings, AdminId )

**Functional Dependencies:**

-   **AdminId**Bookings, Payment, Cancellation

**5.Trip**(TripUserId, TripTrainId, TripRoute, TripDate, TripDesc)

**Functional Dependencies:**

-   **TripTrainId** TripRoute, TripDate, TripDesc

-   **TripRoute, TripDate, TripDesc** TripTrainId

**[2^nd^ NORMALISATION]{.underline}**

1\. The table is in 1NF

2\. Since the primary key is non-composite there are no possible Partial
Dependencies.

Hence, the relations are now in 2nd normalized form.

**[3^rd^ NORMALISATION]{.underline}**

1\. The table is in 2NF

2\. Transitive dependencies are present in the table.

The transitive dependencies are:

-   **AgentID →** AgentMobile**→** AgentName

-   **AdminID→** Bookings**→** Payments

-   **BookingID →** BookingDescription **→** BookingDate,
    BookingStartStation, BookingEndStation, BookingType

-   **TrainID→** TrainName**→** TrainType

-   **TrainID→** TrainRouteDescription**→** TrainRouteName

-   **TicketID→** TicketDescription**→** TicketType

-   **UserID→** UserEmail **→** UserName

-   **UserID→** UserMobile**→** UserName

-   **TripUserID→** TripDescription **→** TripRoute,TripDate

-   **SignUpUserName→** SignUpMobile**→** SignUpEmail

To remove all these transitive dependencies the tables are decomposed as
follows:

1.  **NewAgent(** AgentID, AgentEmail, AgentAdminID, AgentAddress,
    AgentName, AgentAge )

Functional Dependencies:

-   AgentID**→** AgentEmail, AgentAdminID, AgentAddress, AgentName,
    AgentAge

2.  **Agentmap(** AgentID, AgentMobile)

Functional Dependencies:

-   **AgentID→** AgentMobile

3.  **Admin(** AdminID, Bookings, Cancellations)

Functional Dependencies:

-   **AdminID→** Bookings, Cancellations

4.  **Adminmap(** AdminID, Payments)

Functional Dependencies:

-   **AdminID→** Payments

5.  **Booking(**BookingID, BookingType, BookingDate, BookingId,
    BookingUserId, BookingStartStation, BookingEndStation)

Functional Dependencies:

-   **BookingID→** BookingType, BookingDate, BookingId, BookingUserId,
    BookingStartStation, BookingEndStation

6.  **Bookingmap(** BookingID, BookingDescription)

Functional Dependencies:

-   **BookingID→** BookingDescription

7.  **TrainRoute(** TrainID, TrainRouteName)

Functional Dependencies:

-   **TrainID→** TrainRouteName

8.  **TrainRoutemap(** TrainID, TrainRouteDescription)

Functional Dependencies:

-   **TrainID→** TrainRouteDescription

9.  **Available(** AvailableTrainID, AvailableType, AvailableSeats)

Functional Dependencies:

-   **AvailableTrainID→** AvailableType, AvailableSeats

10. **Train(** TrainID, TrainName, TrainSeatNumber, TrainBookingID)

Functional Dependencies:

-   **TrainID→** TrainName, TrainSeatNumber, TrainBookingID

11. **Trainmap(** TrainID, TrainType)

Functional Dependencies:

-   **TrainID→** TrainType

12. **Payment(** PaymentID, PaymentDate, PaymentBookingID, PaymentFare)

Functional Dependencies:

-   **PaymentID→** PaymentDate, PaymentBookingID, PaymentFare

13. **Ticket(** TicketID, TicketDate, TicketType, TicketCustomerID)

Functional Dependencies:

-   **TicketID→** TicketDate, TicketType, TicketCustomerID

14. **Ticketmap(** TicketID, TicketDescription)

Functional Dependencies:

-   **TicketID→** TicketDescription

15. **User(** UserID, UserName)

Functional Dependencies:

-   **UserID→** UserName

16. **Usermap(** UserID, UserMobile, UserEmail)

Functional Dependencies:

-   **UserID→** UserMobile, UserEmail

17. **Cancellation(** CancellationID, CancellationBookingID,
    CancellationTicketID, CancellationPolicy, CancellationRefund)

Functional Dependencies:

-   **CancellationID→** CancellationBookingID, CancellationTicketID,
    CancellationPolicy, CancellationRefund

18. **PreviousTrips(** TripUserID, TripTrainID, TripRoute, TripDate)

Functional Dependencies:

-   **TripUserID→** TripTrainID, TripRoute, TripDate

19. **PreviousTripsmap(** TripUserID, TripDescription)

Functional Dependencies:

-   **TripUserID→** TripDescription

20. **SignUp(** SignUpUsername, SignUpName, SignUpMobile, SignUpAddress)

Functional Dependencies:

-   **SignUpUsername→** SignUpName, SignUpMobile, SignUpAddress

21. **SignUpmap(** SignUpUsername, SignUpEmail)

Functional Dependencies:

-   **SignUpUsername→** SignUpEmail

22. **Login(** Username, Password)

Functional Dependencies:

-   **Username→** Password

Now that all the transitive dependencies are removed, the tables are in
3NF i.e., third normal form.

**[BCNF -- Boyce--Codd normal form]{.underline}**

1\. Above relations are in 3NF.

2\. In the above relations, one can see that only the super key
determines all the other attributes in that relation. So all the
relations are in BCNF.

**b. Database schema after normalisation**

> **1. NewAgent(** AgentID, AgentEmail, AgentAdminID, AgentAddress,
> AgentName, AgentAge )

2.  **Agentmap(** AgentID, AgentMobile)

3.  **Admin(** AdminID, Bookings, Cancellations)

4.  **Adminmap(** AdminID, Payments)

5.  **Booking(** BookingID, BookingType, BookingDate, BookingId,
    BookingType, BookingUserId, BookingStartStation, BookingEndStation)

6.  **Bookingmap(** BookingID, BookingDescription)

7.  **TrainRoute(** TrainID, TrainRouteName)

8.  **TrainRoutemap(** TrainID, TrainRouteDescription)

9.  **Available(** AvailableTrainID, AvailableType, AvailableSeats)

10. **Train(** TrainID, TrainName, TrainSeatNumber, TrainBookingID)

11. **Trainmap(** TrainID, TrainType)

12. **Payment(** PaymentID, PaymentDate, PaymentBookingID, PaymentFare)

13. **Ticket(** TicketID, TicketDate, TicketType, TicketCustomerID)

14. **Ticketmap(** TicketID, TicketDescription)

15. **User(** UserID, UserName)

16. **Usermap(** UserID, UserMobile, UserEmail)

17. **Cancellation(** CancellationID, CancellationBookingID,
    CancellationTicketID, CancellationPolicy, CancellationRefund)

18. **PreviousTrips(** TripUserID, TripTrainID, TripRoute, TripDate)

19. **PreviousTripsmap(** TripUserID, TripDescription)

20. **SignUp(** SignUpUsername, SignUpName, SignUpMobile, SignUpAddress)

21. **SignUpmap(** SignUpUsername, SignUpEmail)

22. **Login(** Username, Password)

**BACKEND DESIGN**

**[a. Table creation commands]{.underline}**

**1.NewAgent**

create table NewAgent(

AgentID varchar(8) PRIMARY KEY,

AgentEmail varchar2(15),

AgentAdminID varchar(8) UNIQUE,

AgentAddress varchar(8),

AgentName varchar(8) NOT NULL,

AgentAge numeric(12) CHECK(AgentAge\>20)

FOREIGN KEY (AgentAdminID REFERENCES Admin(AdminID));

**2.Agentmap**

create table Agentmap(

AgentID varchar(8) PRIMARY KEY,

AgentMobile numeric(12) NOT NULL);

**3. Admin**

create table Admin(

AdminID varchar(8) PRIMARY KEY,

Bookings numeric(5) NOT NULL,

Cancellations numeric(12) );

**4**. **Adminmap**

create table Adminmap

AdminID varchar(8) PRIMARY KEY,

Payments numeric(10) NOT NULL);

**5. Booking**

create table Booking(

BookingID varchar(8) PRIMARY KEY,

BookingType varchar2(15) NOT NULL,

BookingUserID varchar(8) UNIQUE,

BookingStartStation varchar(8) NOT NULL,

BookingEndStation varchar(8) NOT NULL,

FOREIGN KEY (BookingUserID) REFERENCES User(UserID));

**6. Bookingmap**

create table Bookingmap(

BookingID varchar(8) PRIMARY KEY,

BookingDescription varchar2(20) NOT NULL);

**7. TrainRoute**

create table TrainRoute(

TrainID varchar2(5) PRIMARY KEY,

TrainRouteName varchar(30) NOT NULL);

**8.TrainRoutemap**

create table TrainRoutemap(

TrainID varchar2(5) PRIMARY KEY,

TrainRouteDescription varchar(30) NOT NULL);

**9.Available**

create table Available(

AvailableTrainID varchar(10) PRIMARY KEY,

AvailableType varchar(30) NOT NULL,

AvailableSeats integer NOT NULL );

**10.Train**

create table Train(

TrainID varchar(10) PRIMARY KEY,

TrainName varchar(40) NOT NULL,

TrainSeatNumber integer UNIQUE,

TrainBookingID integer NOT NULL );

**11.Trainmap**

create table Trainmap (

TrainID varchar(10) PRIMARY KEY,

TrainType varchar(20) NOT NULL);

**12.Payment**

create table Payment(

PaymentID varchar(15) PRIMARY KEY,

PaymentDate date,

PaymentBookingID varchar(20) NOT NULL,

PaymentFare numeric(10) NOT NULL,

FOREIGN KEY (PaymentBookingID) REFERENCES Booking(BookingID));

**13.Ticket**

create table Ticket(

TicketID varchar(10) PRIMARY KEY,

TicketDate date,

TicketType varchar(10) NOT NULL,

TicketCustomerID varchar(20) UNIQUE,

FOREIGN KEY (TicketCustomerID) REFERENCES Customer(CustomerID));

**14.Ticketmap**

create table Ticketmap(

TicketID varchar(10) PRIMARY KEY,

TicketDescription varchar(20) NOT NULL );

**15.User**

create table User(

UserID varchar(12) PRIMARY KEY,

UserName varchar(10) NOT NULL);

**16.Usermap**

create table Usermap(

UserID varchar(12) PRIMARY KEY,

UserMobile numeric(12) NOT NULL,

UserEmail varchar(10) NOT NULL);

**17.Cancellation**

create table Cancellation(

CancellationID varchar(15) PRIMARY KEY,

CancellationBookingID varchar(15) UNIQUE,

CancellationTicketId varchar(15) UNIQUE,

CancellationPolicy varchar(20) NOT NULL,

CancellationRefund varchar(20) NOT NULL,

FOREIGN KEY (CancellationBookingID) REFERENCES Booking(BookingID));

**18.PreviousTrips**

create table PreviousTrips(

TripUserID varchar(12) PRIMARY KEY,

TripTrainID varchar(12)

TripRoute varchar(25) NOT NULL,

TripDate varchar(15) NOT NULL,

FOREIGN KEY (TriptrainID) REFERENCES TrainRoute(TrainID));

**19.PreviousTripsmap**

create table PreviousTripsmap(

TripUserID varchar(15) PRIMARY KEY,

TripDescription varchar(50) NOT NULL);

**20.SignUp**

create table SignUp(

SignUpUsername varchar(30) PRIMARY KEY,

SignUpName varchar(20) UNIQUE,

SignUpMobile numeric(10) NOT NULL,

SignUpAddress varchar(30)) NOT NULL);

**21.SignUpmap**

create table SignUpmap(

SignUpUsername varchar(30) PRIMARY KEY,

SignUpEmail varchar(20) NOT NULL);

**22.Login**

create table Login(

Username varchar(20) PRIMARY KEY,

Password varchar(20) NOT NULL);

**[b. Insertion of Records]{.underline}**

> **1. NewAgent**
>
> insert into NewAgent
> values(\'a11\',\'sai@gmail.com\',\'ab111\',\'selam\',\'sai\',22);
>
> insert into NewAgent
> values(\'a22\',\'sar12@gmail.com\',\'ab222\',\'noida\',\'sarath\',22);
>
> insert into NewAgent
> values(\'a33\',\'jo35@gmail.com\',\'ab333\',\'noida\',\'joseph\',27);
>
> insert into NewAgent
> values(\'a44\',\'jim87@gmail.com\',\'ab4444\',\'chennai\',\'jimmy\',23)
>
> insert into NewAgent
> values(\'a55\',\'raj37@gmail.com\',\'ab555\',\'odisha\',\'rajkumar\',29)
>
> insert into NewAgent
> values(\'b11\',\'sukku@gmail.com\',\'ba111\',\'punjab\',\'sukumar\',29);
>
> insert into NewAgent
> values(\'b22\',\'ram@gmail.com\',\'ba222\',\'ranchi\',\'ramesh\',32);
>
> insert into NewAgent
> values(\'b33\',\'goku@gmail.com\',\'ba333\',\'delhi\',\'gokul\',23);
>
> insert into NewAgent
> values(\'b44\',\'sai@gmail.com\',\'ba444\',\'delhi\',\'pranavi\',22);
>
> insert into NewAgent
> values(\'b55\',\'sai@gmail.com\',\'ba555\',\'delhi\',\'raji\',24);
>
> **2.Agentmap**
>
> insert into Agentmap values(\'a11\',9908536221);
>
> insert into Agentmap values(\'a22\',6278127352);
>
> insert into Agentmap values(\'a33\',6789012345);
>
> insert into Agentmap values(\'a44\',9182736451);
>
> insert into Agentmap values(\'a55\',8989761245);
>
> insert into Agentmap values(\'b11\',9912345678);
>
> insert into Agentmap values(\'b22\',82412678654);
>
> insert into Agentmap values(\'b33\',72517283633);
>
> insert into Agentmap values(\'b44\',92376142673);
>
> insert into Agentmap values(\'b55\',7878912378);
>
> **3.Admin**
>
> insert into AdminID values(\'a11\',9,2);
>
> insert into AdminID values(\'a22\',7,3);
>
> insert into AdminID values(\'a33\',6,1);
>
> insert into AdminID values(\'a44\',5,0);
>
> insert into AdminID values(\'a55\',12,7);
>
> insert into AdminID values(\'b11\',9,1);
>
> insert into AdminID values(\'b22\',11,1);
>
> insert into AdminID values(\'b33\',10,0);
>
> insert into AdminID values(\'b44\',9,2);
>
> insert into AdminID values(\'b55\',7,3);
>
> **4.Adminmap**
>
> insert into Adminmap values(\'a11\',6800);
>
> insert into Adminmap values(\'a22\',5000);
>
> insert into Adminmap values(\'a33\',4000);
>
> insert into Adminmap values(\'a44\',4000);
>
> insert into Adminmap values(\'a55\',4000);
>
> insert into Adminmap values(\'b11\',6400);
>
> insert into Adminmap values(\'b22\',8000);
>
> insert into Adminmap values(\'b33\',8000);
>
> insert into Adminmap values(\'b44\',5600);
>
> insert into Adminmap values(\'b55\',3200);
>
> **5.Booking**
>
> insert into Booking values(\'1234\',\'second
> Ac\',\'123a\',\'chennai\',\'coimbatore\');
>
> insert into Booking values(\'2345\',\'second
> sleeper\',\'123b\',\'bangalore\',\'coimbatore\');
>
> insert into Booking values(\'3456\',\'first
> Ac\',\'123c\',\'chennai\',\'bangalore\');
>
> insert into Booking values(\'4567\',\'chair
> Ac\',\'123d\',\'salem\',\'coimbatore\');
>
> insert into Booking values(\'7890\', \'2 tier ac\', \'123e\',
> \'nagercoil\',\'salem\' );
>
> insert into Booking values(\'123\',\'second Ac\',\'234a\',\'chennai\',
> \'hosur\' );
>
> insert into Booking values( \'987\', \'2 tier ac\', \'458h\',
> \'chennai\', \'coimbatore\' );
>
> insert into Booking values( \'111\', \'economy ac\', \'214\',
> \'chennai\', \'nellore\' );
>
> insert into Booking values( \'0987\', \'second Ac\', \'123j\',
> \'chennai\', \'rajamundry\' );
>
> insert into Booking values( \'954\',\'second
> ac\',\'123f\',\'guntur\',\'vijayawada\');
>
> **6.Bookingmap**

insert into bookingmap values(1234,\'second Ac\');

insert into bookingmap values(2345,\'second sleeper\');

insert into bookingmap values(3456,\'first Ac\');

insert into bookingmap values(4567,\'chair Ac\');

insert into bookingmap values(7890,\'economy Ac\');

insert into bookingmap values(8901,\'3 tier Ac\');

insert into bookingmap values(9012,\'first Ac\');

insert into bookingmap values(123,\'2 tier Ac\');

insert into bookingmap values(124,\'first Ac\');

insert into bookingmap values(125,\'second Ac\');

> **7.TrainRoute**

insert into trainroute values(1000,\'chennai to coimbatore\');

insert into trainroute values(2000,\'banglore to coimbatore\');

insert into trainroute values(3000,\'chennai to banglore\');

insert into trainroute values(4000,\'salem to coimbatore\');

insert into trainroute values(5000,\'chennai to kumbakonam\');

insert into trainroute values(6000,\'chennai to thanjavur\');

insert into trainroute values(7000,\'nagercoil to salem\');

insert into trainroute values(8000,\'chennai to hosur\');

insert into trainroute values(9000,\'thirunalaveli to coimbatore\');

insert into trainroute values(1001,\'chennai to nellore\');

> **8.TrainRoutemap**
>
> insert into trainroutemap values(1000,\'chennai to coimbatore\');

insert into trainroutemap values(2000,\'banglore to coimbatore\');

insert into trainroutemap values(3000,\'chennai to banglore\');

insert into trainroutemap values(4000,\'salem to coimbatore\');

insert into trainroutemap values(5000,\'chennai to kumbakonam\');

insert into trainroutemap values(6000,\'chennai to thanjavur\');

insert into trainroutemap values(7000,\'nagercoil to salem\');

insert into trainroutemap values(8000,\'chennai to hosur\');

insert into trainroutemap values(9000,\'thirunalaveli to coimbatore\');

insert into trainroutemap values(1001,\'chennai to nellore\');

> **9.Available**

insert into available values(1000,\'ajanta Express\',12,0231);

insert into available values(2000,\'Amaravati Express\',32,6542);

insert into available values(3000,\'Ananthapuri Express\',56,9852);

insert into available values(4000,\'Arunachal Express\',31,4582);

insert into available values(5000,\'Azad Hind Express\',11,3179);

insert into available values(6000,\'chennai express\',9,8273);

insert into available values(7000,\'howrah express\',4,1973);

insert into available values(8000,\'chatrapathi shivaji mail\',7,7896);

insert into available values(9000,\'Cheran Express\',25,1036);

insert into available values(1001,\'Gondwana Express\',33,4789);

> **10.Train**

insert into train values(1000,\'ajanta Express\',12,0231);

insert into train values(2000,\'Amaravati Express\',32,6542);

insert into train values(3000,\'Ananthapuri Express\',56,9852);

insert into train values(4000,\'Arunachal Express\',31,4582);

insert into train values(5000,\'Azad Hind Express\',11,3179);

insert into train values(6000,\'chennai express\',9,8273);

insert into train values(7000,\'howrah express\',4,1973);

insert into train values(8000,\'chatrapathi shivaji mail\',7,7896);

insert into train values(9000,\'Cheran Express\',25,1036);

insert into train values(1001,\'Gondwana Express\',33,4789);

> **11.Trainmap**
>
> insert into Trainmap values(1000,\'second Ac\');
>
> insert into Trainmap values(2000,\'first Ac\');
>
> insert into Trainmap values(3000,\'second sleeper\');
>
> insert into Trainmap values(4000,\'chair Ac\');
>
> insert into Trainmap values(5000,\'economy Ac\');
>
> insert into Trainmap values(6000,\'economy Ac\');
>
> insert into Trainmap values(7000,\'chair Ac\');
>
> insert into Trainmap values(8000,\'second sleeper\');
>
> insert into Trainmap values(9000,\'first Ac\');
>
> insert into Trainmap values(1001,\'second Ac\');
>
> **12.Payment**
>
> insert into Payment values(\'P81788ZZ\',\'20-02-2020\',\'1234\',2300);
>
> insert into Payment values(\'P98239PL\',\'21-12-2005\',\'2345\',4500);
>
> insert into Payment values(\'PHHEW192\',\'01-10-2004\',\'3456\',2100);
>
> insert into Payment values(\'PKDHGEUH\',\'06-03-2004\',\'4567\',3550);
>
> insert into Payment values(\'PJNJYGS2\',\'10-10-2010\',\'7890\',1900);
>
> insert into Payment values(\'P3298897\',\'13-03-2001\',\'123\',2600);
>
> insert into Payment values(\'PADJB911\',\'06-01-2019\',\'987\',1300);
>
> insert into Payment values(\'PWJWEJH2\',\'01-12-2004\',\'111\',4200);
>
> insert into Payment values(\'PWEKJWEJ\',\'01-10-2019\',\'0987\',4300);
>
> insert into Payment values(\'PEWJHW11\',\'11-12-2004\',\'954\',2700);
>
> **13.Ticket**

insert into Ticket
values(\'1234E1\',\'11-12-2004\',\'General\',\'CA12\');

> insert into Ticket
> values(\'9834Z2\',\'20-02-2004\',\'Tatkal\',\'CB123\');
>
> insert into Ticket
> values(\'877W12\',\'01-10-2004\',\'Ladies\',\'CC1234\');
>
> insert into Ticket
> values(\'9928HZ\',\'31-08-2004\',\'Senior\',\'CD12345\');
>
> insert into Ticket
> values(\'8773NN\',\'01-12-2004\',\'Tourist\',\'CE123456\');
>
> insert into Ticket
> values(\'21UNM1\',\'06-03-2004\',\'Ladies\',\'CF1234567\');
>
> insert into Ticket
> values(\'218PPA\',\'29-06-2004\',\'Senior\',\'CG12345678\');
>
> insert into Ticket
> values(\'87QKH1\',\'18-05-2004\',\'General\',\'CH234567811\');
>
> insert into Ticket
> values(\'U1U91J\',\'11-02-2004\',\'Tourist\',\'CI1123456788\');
>
> insert into Ticket
> values(\'18HQWS\',\'07-01-2004\',\'Tatkal\',\'CJ12334\');
>
> **14.Ticketmap**

insert into Ticketmap values(\'1234E1\',\'11-12-2004-General\');

insert into Ticketmap values(\'9834Z2\',\'20-02-2004-Tatkal\');

insert into Ticketmap values(\'877W12\',\'01-10-2004-Ladies\');

insert into Ticketmap values(\'9928HZ\',\'31-08-2004-Senior\');

insert into Ticketmap values(\'8773NN\',\'01-12-2004-Tourist\');

insert into Ticketmap values(\'21UNM1\',\'06-03-2004-Ladies\');

insert into Ticketmap values(\'218PPA\',\'29-06-2004-Senior\');

insert into Ticketmap values(\'87QKH1\',\'18-05-2004-General\');

insert into Ticketmap values(\'U1U91J\',\'11-02-2004-Tourist\');

insert into Ticketmap values(\'18HQWS\',\'07-01-2004-Tatkal\');

> **15.User**
>
> insert into Us values( \'123a\',\'Mukesh\'); //User keyword is renamed
> to Us
>
> insert into Us values( \'123b\',\'Sukesh\');
>
> insert into Us values( \'123c\',\'Ramesh\');
>
> insert into Us values( \'123d\',\'Suresh\');
>
> insert into Us values( \'123e\',\'Ravi\');
>
> insert into Us values( \'234a\',\'Dushyanth\');
>
> insert into Us values( \'458h\',\'Vineeth\');
>
> insert into Us values( \'214\',\'Ashok\');
>
> insert into Us values( \'123j\',\'Harshith\');
>
> insert into Us values( \'123f\',\'Jyothi\');
>
> **16.Usermap**

insert into Us values(\'123a\',987654321,\'sai@gmail.com\');

insert into Us values(\'123b\',123456789,\'sar12@gmail.com\');

insert into Us values(\'123c\',99085636221,\'jo35@gmail.com\');

insert into Us values( \'123d\',6278127352,\'jim87@gmail.com\');

insert into Us values( \'123e\',6789012345, \'raj37@gmail.com\');

insert into Us values( \'234a\',9182736451,\'sukku@gmail.com\');

insert into Us values( \'458h\',8989761245,\'ram@gmail.com\');

insert into Us values( \'214\',7251728333,\'wj@gmail.com\');

insert into Us values( \'123j\',7878912378,\'sai@gmail.com\');

insert into Us values( \'123f\',92376142673,\'sai@gmail.com\');

> **17.Cancellation**
>
> insert into Cancellation
> values(\'9001\',\'1234\',\'6001\',\'Yes\',\'1024\');
>
> insert into Cancellation
> values(\'9002\',\'2345\',\'6002\',\'Yes\',\'4015\');
>
> insert into Cancellation
> values(\'9003\',\'3456\',\'6003\',\'Yes\',\'3569\');
>
> insert into Cancellation
> values(\'9004\',\'4567\',\'6004\',\'Yes\',\'1596\');
>
> insert into Cancellation
> values(\'9005\',\'7890\',\'6005\',\'Yes\',\'6800\');
>
> insert into Cancellation
> values(\'9006\',\'123\',\'6006\',\'Yes\',\'5000\');
>
> insert into Cancellation
> values(\'9007\',\'987\',\'6007\',\'Yes\',\'1016\');
>
> insert into Cancellation
> values(\'9008\',\'111\',\'6008\',\'Yes\',\'4000\');
>
> insert into Cancellation
> values(\'9009\',\'0987\',\'6009\',\'Yes\',\'3200\');
>
> insert into Cancellation
> values(\'9010\',\'954\',\'6010\',\'Yes\',\'5600\');
>
> **18.PreviousTrips**
>
> insert into PreviousTrips values( \'1601\',\'1000\',\'chennai to
> coimbatore\',\'02-03-2002\');
>
> insert into PreviousTrips
> values(\'1602\',\'2000\',\'bangaloretocoimbatore\',\'15-12-2001\');
>
> insert into PreviousTrips values( \'1603\',\'3000\',\'chennai to
> bangalore\',\'13-10-2012\');
>
> insert into PreviousTrips values( \'1604\',\'4000\',\'salem to
> coimbatore\',\'18-02-2006\');
>
> insert into PreviousTrips values( \'1605\',\'5000\',\'delhi to
> punjab\',\'02-06-2009\');
>
> insert into PreviousTrips values( \'1606\',\'6000\',\'punjab to
> chandigarh\',\'14-04-2005\');
>
> insert into PreviousTrips values( \'1607\',\'7000\',\'chandigarh to
> sikkim\',\'25-03-2008\');
>
> insert into PreviousTrips values( \'1608\',\'8000\',\'lucknow to
> meghalaya\',\'15-08-2003\');
>
> insert into PreviousTrips values( \'1609\',\'9000\',\'nellore to
> chennai\',\'12-03-2007\');
>
> insert into PreviousTrips values( \'1610\',\'1001\',\'guntur to
> vijayawada\',\'28-12-2018\');
>
> **19.PreviousTripsmap**
>
> insert into PreviousTripsmap values(7000,\'chennai to coimbatore\');
>
> insert into PreviousTripsmap values(7002,\'banglore to coimbatore\');
>
> insert into PreviousTripsmap values(7003,\'chennai to banglore\');
>
> insert into PreviousTripsmap values(7004,\'salem to coimbatore\');
>
> insert into PreviousTripsmap values(7005,\'chennai to kumbakonam\');
>
> insert into PreviousTripsmap values(7006,\'chennai to thanjavur\');
>
> insert into PreviousTripsmap values(7007,\'nagercoil to salem\');
>
> insert into PreviousTripsmap values(7008,\'chennai to hosur\');
>
> insert into PreviousTripsmap values(7009,\'thirunalaveli to
> coimbatore\');
>
> insert into PreviousTripsmap values(7010,\'chennai to nellore\');
>
> **20.SignUp**
>
> insert into signup values(\'sukesh\',\'suku\',9087675644,\'selam\');
>
> insert into signup values(\'mukesh\',\'muku\',9459984644,\'chennai\');
>
> insert into signup
> values(\'ketan\',\'ketha\',9398564759,\'coimbatore\');
>
> insert into signup values(\'vineeth\',\'vinu\',787673199,\'delhi\');
>
> insert into signup values(\'roja\',\'roja11\',6087696163,\'nellore\');
>
> insert into signup values(\'ramesh\',\'ram\',8087634361,\'guntur\');
>
> insert into signup
> values(\'pavanreddy\',\'pavan\',6087698624,\'pune\');
>
> insert into signup
> values(\'kruthik\',\'kruthi\',9864521374,\'hosur\');
>
> insert into signup values(\'keshav\',\'kesha\',6087658921,\'kerala\');
>
> insert into signup values(\'latha\',\'latha1\',9638756941,\'punjab\');
>
> **21.SignUpmap**
>
> insert into signupmap values(\'sukesh\',\'suku@gmail.com\');
>
> insert into signupmap values(\'mukesh\',\'muku@gmail.com\');
>
> insert into signupmap values(\'ketan\',\'ketha@gmail.com\');
>
> insert into signupmap values(\'vineeth\',\'vinu@gmail.com\');
>
> insert into signupmap values(\'roja\',\'roja1@gmail.com\');
>
> insert into signupmap values(\'ramesh\',\'ram@gmail.com\');
>
> insert into signupmap values(\'pavanreddy\',\'pavan@gmail.com\');
>
> insert into signupmap values(\'kruthik\',\'kruthi@gmail.com\');
>
> insert into signupmap values(\'keshav\',\'kesha@gmail.com\');
>
> insert into signupmap values(\'latha\',\'latha1@gmail.com\');
>
> **22.Login**
>
> insert into Login values(\'sai12ED\',\'SAI34TS\');
>
> insert into Login values(\'sarath23TF\',\'i34tsarath\');
>
> insert into Login values(\'joseph12ED\',\'jo34fs\');
>
> insert into Login values(\'sukumar56ed\',\'SAku435\');
>
> insert into Login values(\'raji53g\',\'ra546\');
>
> insert into Login values(\'gokulf4\',\'gok54r\');
>
> insert into Login values(\'rajkumar23e\',\'raj67\');
>
> insert into Login values(\'ramesh546\',\'ram345e\');
>
> insert into Login values(\'pranavied4\',\'dhg34TS\');
>
> insert into Login values(\'jimmy76\',\'sg3wdw\');

**[c. Sample instances of the tables]{.underline}**

> **1. NewAgent**
>
> ![](media/image4.tmp){width="5.675in" height="3.566666666666667in"}
>
> **2.Agentmap**
>
> ![](media/image5.tmp){width="2.2416666666666667in"
> height="3.783333333333333in"}

**3.Admin**

> ![](media/image6.jpeg)

**4.Adminmap**

![](media/image7.png)

**5.Booking**

> ![](media/image8.jpeg)
>
> **6.Bookingmap**
>
> ![](media/image9.png){width="2.726935695538058in"
> height="2.531399825021872in"}
>
> **7.TrainRoute**
>
> ![](media/image10.png){width="2.84917760279965in"
> height="2.4200218722659668in"}
>
> **8.TrainRoutemap**
>
> ![](media/image11.png){width="3.1430500874890637in"
> height="2.2978423009623796in"}

**9.Available**

> ![](media/image12.png){width="3.3010575240594924in"
> height="2.2810094050743657in"}
>
> **10.Train**
>
> ![](media/image13.png){width="3.9258792650918637in"
> height="2.246540901137358in"}
>
> **11.Trainmap**

![](media/image14.png)

> **12.Payment**
>
> ![](media/image15.png)
>
> **13.Ticket**
>
> ![](media/image16.png)
>
> **14.Ticketmap**
>
> ![](media/image17.png)
>
> **15.User**
>
> ![](media/image18.jpeg)
>
> **16.Usermap**
>
> ![](media/image19.png)
>
> **17.Cancellation**
>
> ![](media/image20.jpeg)
>
> **18.PreviousTrips**
>
> ![](media/image21.jpeg)
>
> **19.PreviousTripsmap**
>
> ![](media/image22.jpeg)
>
> **20.SignUp**
>
> ![](media/image23.jpeg)
>
> **21.SignUpmap**
>
> ![](media/image24.jpeg)
>
> **22.Login**
>
> ![](media/image25.jpeg)

**[FRONTEND DESIGN]{.underline}**

**Sample Screenshots:**

**Home Page:**

![](media/image26.png){width="6.6930555555555555in"
height="3.167361111111111in"}

![](media/image27.png)

![](media/image28.png)

**Sign Up Page:**

![](media/image29.png){width="6.734332895888014in"
height="2.989196194225722in"}

**Available Trains Page:**

![](media/image30.png){width="6.6930555555555555in"
height="3.178472222222222in"}

**Booking Details Page:**

![](media/image31.png){width="6.6930555555555555in"
height="3.1333333333333333in"}

**SMS Details Page:**

![](media/image32.png){width="6.6930555555555555in"
height="3.134027777777778in"}

**Payment Page:**

![](media/image33.png){width="6.6930555555555555in"
height="3.170138888888889in"}

![](media/image34.png){width="6.6425328083989506in"
height="2.7801410761154854in"}

**E-ticket Page:**

![](media/image35.png){width="6.706411854768154in"
height="2.8362040682414698in"}

**My Bookings page:**

![](media/image36.png){width="6.6930555555555555in"
height="3.157638888888889in"}

**Ticket Cancellation Page:**

![](media/image37.png){width="6.698267716535433in"
height="2.9051727909011373in"}

![](media/image38.png){width="6.6930555555555555in"
height="3.157638888888889in"}

![](media/image39.png){width="6.426127515310586in"
height="2.966367016622922in"}

**CONNECTIVITY(USING PHP):**

**Sign Up.php**

![](media/image40.jpeg){width="6.710686789151356in"
height="3.31586832895888in"}

**Train Ticket Reservation.php**

![C:\\Users\\lenovo\\AppData\\Local\\Microsoft\\Windows\\INetCache\\Content.Word\\train
ticket reservation1.png](media/image41.png){width="5.708737970253718in"
height="3.877083333333333in"}

![](media/image42.png)

**Train Details.php**

![](media/image43.png)

**Stored Records(Using Xamp to run php):**

**Booked:**

![](media/image44.png)

**Customer:**

![](media/image45.png)

**Route:**

![C:\\Users\\lenovo\\AppData\\Local\\Microsoft\\Windows\\INetCache\\Content.Word\\5route.png](media/image46.png){width="6.689583333333333in"
height="3.2333333333333334in"}

**Schedule:**

![](media/image47.png)

**Payment:**

![](media/image48.png)

**CONCLUSION:**

The main of developing reservation system is to provide all information
that is required by the users. User friendliness is a must that is the
user must get the details without complicated searching procedures.
Other important requirements of software are data security,
extensibility and maintainability.

The online ticket booking system lets both the customers and the booking
agents by making the ticket booking process easier and smoother. Since
it makes it easier for the customers to easily book tickets from your
website, it also earns new customers and helps to manage everything
quite easily.

**REFERENCES:**

1\. http://www.google.com/

2\. https://www.tutorialspoint.com/sql/

3\. <https://www.w3schools.com/php/>

4\. https://en.wikipedia.org/wiki/Amazon_DynamoDB
