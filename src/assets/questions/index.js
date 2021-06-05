const lifeQuestions = {
    '1': {
        statement: 'Who is protected under the In-Contestability Clause included under a Life Assurance Policy?',
        options: ['Insurer', 'Insured', 'Insurance Agent', 'Insurance Broker'],
        answer: 2,
        selectedAnswer: 0,
    },
    '2': {
        statement: 'CSection 45 (Indisputability Clause) of Insurance Act, protects the Insured, from Rejection of Claim, by the Insurer; provided the Policy has completed --. Choose the Most Appropriate Option.',
        options: ['One Year', 'Three Years', 'Five Years', 'Seven Years'],
        answer: 2,
        selectedAnswer: 0,
    },
    '3': {
        statement: 'As per the Suicide Clause, if the Life-Assured Dies, as a Result of Suicide, After 3 Years of the Issue of Policy, What Does the Beneficiary Receive as the Claim?',
        options: ['Nothing', 'Premium, Paid by the Life-Assured.', '(2 × Premium), Paid by the Life-Assured', 'Full Face-Amount of the Policy.'],
        answer: 4,
        selectedAnswer: 0,
    },
    '4': {
        statement: 'What Does, First Premium Receipt (F.P.R.), signify?',
        options: ['Free-Look Period has ended.', 'It is the Evidence, that the Policy-Contract has begun.', 'Policy cannot be cancelled, Now.', 'Policy has acquired a Certain Cash-Value.'],
        answer: 2,
        selectedAnswer: 0
    },
    '5': {
        statement: 'Identify the Document, that evidences a Contract, between the Insurer and the Insured.',
        options: ['Proposal-Form', 'Claim-Form', 'Nomination-Form', 'Policy-Document'],
        answer: 4,
        selectedAnswer: 0
    },
    '6': {
        statement: 'If Complex Language is used to word a Certain Policy- Document, and it has given Rise to an Ambiguity, How Will it generally be construed?',
        options: ['In Favour of the Insured.', 'In Favour of the Insurer.', 'The Policy will be declared as Void, and the Insurer will be asked to Return the Premium, With Interest,to the Insured.', 'The Policy will be declared as Void, and the Insurer will be asked to Return the Premium, to the Insured, Without Any Interest.'],
        answer: 1,
        selectedAnswer: 0
    },
    '7': {
        statement: 'With Regards to Mis-Statement of Age, Select the Valid Option: I: An Under-Statement of Age, will result in the Original Policy being re-issued, for a Reduced Amount. II: An Over-Statement of Age, will, usually, result in a Refund of Premium-Payment.',
        options: ['I, Only.', 'II, Only.', 'I and II.', 'Neither I, Nor II.'],
        answer: 3,
        selectedAnswer: 0
    },
    '8': {
        statement: 'Which of the Following, is Not a Part of a Standard Policy-Document?',
        options: ['Policy Schedule', 'Standard Provisions', 'Policy-Specific Provisions', 'Policy Forfeiture Provisions'],
        answer: 4,
        selectedAnswer: 0
    },
    '9': {
        statement: 'Give us, the Proof of Contract between the Insurer and the Insured.',
        options: ['Proposal-Form', 'Claim-Form', 'Nomination-Form', 'Policy Document'],
        answer: 4,
        selectedAnswer: 0
    },
    '10': {
        statement: 'Gives us, an Example of a Standard Policy-Provision.',
        options: ['A Clause, Precluding the Death Due to Pregnancy, for a Lady, Who is Expecting at the Time of Writing the Contract.', 'Suicide Clause', 'A Clause, Precluding Certain Illnesses.', 'A Clause, Granting Certain Privileges to the Policy-Holder.'],
        answer: 2,
        selectedAnswer: 0
    },
    '11': {
        statement: 'Gives us, an Example of a Policy-Specific Provision.',
        options: ['Premium-Payment', 'Mis-Statement of Age', 'Claim-Provision', 'A Clause, Precluding the Death Due to Pregnancy, for a Lady, Who is Expecting, at the Time of Writing the Contract.'],
        answer: 4,
        selectedAnswer: 0
    },
    '12': {
        statement: 'Which One of the Following, forms the First Part of a Standard Insurance Policy-Document?',
        options: ['Policy-Schedule', 'Standard Provisions', 'Specific-Policy Provisions', 'Claim-Procedure'],
        answer: 1,
        selectedAnswer: 0
    },
    '13': {
        statement: 'Select the Correct Statement.',
        options: ['The Policy Document has to be signed by a Competent Authority, but need not be compulsorily stamped according to Indian Stamp Act.',
            'The Policy Document has to be signed by a Competent Authority, and should be stamped according to Indian Stamp Act.',
            'The Policy Document need not be signed by a Competent Authority, but should be stamped according to Indian Stamp Act.',
            'The Policy Document neither needs to be signed by a Competent Authority, nor it needs to be compulsorily stamped according to Indian Stamp Act.'],
        answer: 2,
        selectedAnswer: 0
    },
    '14': {
        statement: 'What Will Happen, if the Insured-Person loses the Original Life Assurance Policy-Document?',
        options: ['The Insurance Company will issue a Duplicate Policy, Without Making Any Changes to the Contract.', 'The Insurance Contract will Come to an End.', 'The Insurance Company will issue a Duplicate Policy, with the Renewed Terms and Conditions, Based on the Current Health- Declarations of the Life- Assured.', 'The Insurance Company will issue a Duplicate Policy, Without Making Any Changes to the Contract; But, Only After a Court-Order.'],
        answer: 1,
        selectedAnswer: 0
    },
    '15': {
        statement: 'Which One of the Following Documents, will be issued by the Insurance Company, on Receipt of Subsequent Premiums, After the First Premium?',
        options: ['Revival Premium Receipt', 'Restoration Premium Receipt', 'Reinstatement Premium Receipt', 'Renewal Premium Receipt'],
        answer: 4,
        selectedAnswer: 0
    },
    '16': {
        statement: 'In Order for the Policy to acquire a Guaranteed Surrender-Value (G.S.V.), For How Long, must, the Premiums be Paid, as per the Regulations?',
        options: ['2 Consecutive Years', '4 Consecutive Years', '3 Consecutive Years', '5 Consecutive Years'],
        answer: 3,
        selectedAnswer: 0
    },
    '17': {
        statement: 'For a Life Assurance Policy, Nomination is allowed Under --- of Insurance Act, 1938.',
        options: ['Section 10', 'Section 38', 'Section 39', 'Section 45'],
        answer: 3,
        selectedAnswer: 0
    },
    '18': {
        statement: 'Identify the Circumstances, under which, the Policy- Holder would need to appoint an Appointee.',
        options: ['Insured is a Minor', 'Nominee is a Minor', 'Policy-Holder is Not of Sound Mind', 'Policy-Holder is Not Married'],
        answer: 2,
        selectedAnswer: 0
    },
    '19': {
        statement: 'Illustrate the Purpose of Grace-Period.',
        options: ['It is a Period, within which, Policy-Holder may cancel the Policy, if He or She Does Not Like the Same.', 'It grants the Policy- Holder, An Additional Time, to Pay His or Her Premium.', 'It provides a Period, within which, Policy- Holder must raise a Complaint, in Case of Any Grievance.', 'It provides a Period, after which, Policy- Holder must Pay His or Her Over-Due Premium.'],
        answer: 2,
        selectedAnswer: 0
    },
    '20': {
        statement: 'All of the Following Statements, are True, with Regard to Nomination, Except:',
        options: ['Policy-Nomination is Not Cancelled, if the Policy is assigned to the Insurer, in Return for a Loan.', 'Nomination can be Done, at the Time of Policy-Purchase or Subsequently.', 'Nomination can be Changed, by Making an Endorsement in the Policy.', 'A Nominee has Full Rights on the Whole of the Claim.'],
        answer: 4,
        selectedAnswer: 0
    },
    '21': {
        statement: 'When is a Policy, Deemed to be Lapsed?',
        options: ['If the Premiums are Not Paid on the Due-Date.', 'If the Premiums are Not paid, Before the Due- Date.', 'If the Premium has Not been paid, even After Expiry of Grace-Period.', 'If the Policy is surrendered.'],
        answer: 3,
        selectedAnswer: 0
    },
    '22': {
        statement: 'Construct a Situation, that would require Evidence of Insurability, at Revival.',
        options: ['It has been a Week, since the Policy has been Lapsed.', 'Policy has been Lapsed, for More Than a Year.', 'Policy has been In- Force, for a Year.', 'Loan against Policy has been sought.'],
        answer: 2,
        selectedAnswer: 0
    },
    '23': {
        statement: 'Construct a Valid Argument in Favour of Policy-Loans.',
        options: ['A Loan of Any Amount, can be obtained, easily.', 'Insured can decide the Terms and Conditions of the Loan.', 'There is No Legal Obligation to Re-Pay the Loan.', 'No Collateral is required.'],
        answer: 3,
        selectedAnswer: 0
    },
    '24': {
        statement: 'Select the Correct Statement, with Regard to Grace- Period. Choose the Most Appropriate Option.',
        options: ['The Standard Length of the Grace-Period is 1 Month or 31 Days.', 'The Standard Length of the Grace-Period is One Quarter.', 'The Standard Length of the Grace-Period is One Week.', 'The Standard Length of the Grace-Period is One Fort-Night.'],
        answer: 1,
        selectedAnswer: 0
    },
    '25': {
        statement: 'Which One of the Following Alterations, will be permitted, by an Insurance Company?',
        options: ['Splitting-Up of the Policy into Two or More Policies.', 'Extension of the Premium-Paying-Term.', 'Change of the Policy from "With-Profits" Policy to "Without-Profits" Policy.', 'Increase in the Sum- Assured.'],
        answer: 1,
        selectedAnswer: 0
    },
    '26': {
        statement: 'Explain the Concept of Surrender-Value.',
        options: ['Maximum Compensation, Available Under Policy.', 'Cash-Value, Associated with the Policy, in Case, the Premiums have been Paid, for 3 Years, at least.', 'Minimum Compensation, Available Under the Policy.', 'Compensation, Available Under the Policy, At Any Given Point of Time.'],
        answer: 2,
        selectedAnswer: 0
    },
    '27': {
        statement: 'How Many Persons, can be nominated under a Policy? Choose the Most Appropriate Option.',
        options: ['Exactly One', 'Exactly Two', 'Exactly Three', 'One or More Than One'],
        answer: 4,
        selectedAnswer: 0
    },
    '28': {
        statement: 'Describe the Purpose of Nomination.',
        options: ['To Transfer the Rights of the Policy.', 'To Appoint a Person, to Receive the Policy- Monies, in the Event of the Life-Assureds Death.', 'To Surrender the Policy.', 'To Create an Estate.'],
        answer: 2,
        selectedAnswer: 0
    },
    '29': {
        statement: 'Describe the Purpose of Assignment.',
        options: ['To Transfer the Rights of the Policy.', 'To Appoint a Person, to Receive the Policy- Monies, in the Event of the Life-Assureds Death.', 'To Surrender the Policy.', 'To Create an Estate.'],
        answer: 1,
        selectedAnswer: 0
    },
    '30': {
        statement: 'Illustrate the Process involved in Ordinary Revival of Policy.',
        options: ['Write a New Policy, whose Date-of- Commencement is Within Two Years of the Original Date-of- Commencement of the Lapsed Policy.', 'Payment of Arrears, With Interest.', 'Get a Loan on the Lapsed Policy, as a Consideration for Revival-Purposes.', 'Pay the Premium- Arrears, in Instalments.'],
        answer: 2,
        selectedAnswer: 0
    },

};

const generalQuestions = {
    '1': {
        statement: 'Non-Life Insurers must ensure that, they do not insure the Assets, that are',
        options: ['Bought, Out of Public Money', 'Bought, Using the Bank- Loans', 'Bought, Out of Illegal Funding', 'Bought, By Mortgaging the Property'],
        answer: 1,
        selectedAnswer: 0,
    },
    '2': {
        statement: 'How is the Claim calculated, in Case of Fire Insurance?',
        options: ['Percentage of Loss, caused by Fire.', 'Purchase-Value of the Damages, caused by Fire.', 'Current Value of Assets.', 'Depreciated Value of Assets.'],
        answer: 4,
        selectedAnswer: 0,
    },
    '3': {
        statement: 'Subrogation follows from the Principle of --.',
        options: ['Indemnity', 'Insurance', 'Risk-Coverage', 'Risk-Mitigation'],
        answer: 1,
        selectedAnswer: 0,
    },
    '4': {
        statement: '--- is the Process, an Insurance Company uses, to recover the Claim-Amounts, paid to a Policy-Holder, from a Negligent Third-Party.',
        options: ['Underwriting', 'Nomination', 'Subrogation', 'Contract'],
        answer: 3,
        selectedAnswer: 0,
    },
    '5': {
        statement: '--- can also be defined as Surrender of Rights, by the Insured, to an Insurance Company, that has paid a Claim against the Third-Party.',
        options: ['Subrogation', 'Contract', 'Nomination', 'Underwriting'],
        answer: 1,
        selectedAnswer: 0,
    },
    '6': {
        statement: 'In the Concept of Insurance, Risk always implies a --.',
        options: ['Doubt', 'Mitigation', 'Probability', 'Tangible Value'],
        answer: 3,
        selectedAnswer: 0,
    },
    '7': {
        statement: 'A Condition, which increase the Probability of a Loss or its Severity, and affects the Associated Risk, is known as --.',
        options: ['Rider', 'Hazard', 'Speculation', 'Mitigation'],
        answer: 2,
        selectedAnswer: 0,
    },
    '8': {
        statement: 'The Provisions of Indian Contract Act, ---, govern All Contracts in India, including Insurance Contracts.',
        options: ['1919', '1929', '1887', '1872'],
        answer: 4,
        selectedAnswer: 0,
    },
    '9': {
        statement: 'For an Insurance Claim to be paid, the Associated Loss, incurred due to the Risk, must be --- and --.',
        options: ['Definite, Measurable', 'Static, Speculative', 'Dynamic, Critical', 'Pure, Marginal'],
        answer: 1,
        selectedAnswer: 0,
    },
    '10': {
        statement: '--- Insurance is Available to Cover Both: Fundamental Risk and Particular Risk.',
        options: ['Medical', 'Life', 'Commercial', 'Agricultural'],
        answer: 3,
        selectedAnswer: 0,
    },
    '11': {
        statement: 'Dynamic Risks are based on, Which Type of Classification?',
        options: ['Extent of Damage', 'Nature of Environment', 'Consequence', 'Tenure'],
        answer: 2,
        selectedAnswer: 0,
    },
    '12': {
        statement: '--- Risks cannot be insured.',
        options: ['Speculative', 'Dynamic', 'Static', 'Fundamental'],
        answer: 1,
        selectedAnswer: 0,
    },
    '13': {
        statement: '--- is Not a Type of Hazard.',
        options: ['Legal Risks', 'Social Risks', 'Moral Risks', 'Physical Risks'],
        answer: 2,
        selectedAnswer: 0,
    },
    '14': {
        statement: 'In Certain Cases, when Value of Loss cannot be easily estimated or ascertained, at the Time of Loss, a Principle, known as --, is adopted.',
        options: ['Ascertained Value', 'Speculated Value', 'Agreed Value', 'Imposed Value'],
        answer: 3,
        selectedAnswer: 0,
    },
    '15': {
        statement: 'The Concept of "Utmost Good Faith", indicates that, "It is the Positive Duty of the Proposer, to --- disclose, Accurately and Fully, All the Facts, Material to the Risk- Being-Proposed, Whether Requested or Not."',
        options: ['Completely', 'Voluntarily', 'Definitively', 'Accurately'],
        answer: 2,
        selectedAnswer: 0,
    },
    '16': {
        statement: 'An Insurance Contract generally becomes Void, when there is --, with Intent to Deceive.',
        options: ['Abetment', 'Mis-Representation', 'Concealment', 'Fraud'],
        answer: 3,
        selectedAnswer: 0,
    },
    '17': {
        statement: 'A Statement, made during Negotiation of a Contract of Insurance, is called --.',
        options: ['Declaration', 'Affidavit', 'Representation', 'Agreement'],
        answer: 3,
        selectedAnswer: 0,
    },
    '18': {
        statement: '--- Mis-Representation are considered to be Over-Sight, while making a Statement.',
        options: ['Innocent', 'Fraudulent', 'Intended', 'Mutual'],
        answer: 1,
        selectedAnswer: 0,
    },
    '19': {
        statement: 'The Event, whose Occurrence, actually leads to the Loss, is known as a --.',
        options: ['Peril', 'Risk', 'Un-Certainty', 'Hazard'],
        answer: 1,
        selectedAnswer: 0,
    },
    '20': {
        statement: 'Which One of the Following, is Not a Pure Risk?',
        options: ['Suicide', 'Death', 'Accident', 'Sickness'],
        answer: 1,
        selectedAnswer: 0,
    },
    '21': {
        statement: 'Where, a Proposal-Form is Not Used, the Insurer shall record the Information --.',
        options: ['Orally', 'In-Writing', 'Contract', 'Document'],
        answer: 2,
        selectedAnswer: 0,
    },
    '22': {
        statement: 'Insurance Contract, whether in the Form of a Policy or a Cover-Note, is called --.',
        options: ['Proposal-Form', 'Cover', 'Material', 'Prospectus'],
        answer: 2,
        selectedAnswer: 0,
    },
    '23': {
        statement: 'A Form, to be filled-in by the Proposer for Insurance, furnishing All Material Information, required by the Insurer, is called --.',
        options: ['Material', 'Cover', 'Proposal-Form', 'Declaration-Form'],
        answer: 3,
        selectedAnswer: 0,
    },
    '24': {
        statement: '--- shall mean and include, All: Important, Essential, and Relevant Information, in the Context of Underwriting the Risk, to be Covered by the Insurer.',
        options: ['Cover', 'Proposal-Form', 'Material', 'Declaration-Form'],
        answer: 3,
        selectedAnswer: 0,
    },
    '25': {
        statement: 'Document, issued by the Insurer, or on its Behalf, to the Prospective Buyers of Insurance, is called --.',
        options: ['Proposal-Form', 'Cover', 'Prospectus', 'Declaration-Form'],
        answer: 3,
        selectedAnswer: 0,
    },
    '26': {
        statement: 'Where, a Proposal-Form is Not Used, the Insurer shall record the Information, obtained Orally or In-Writing, and confirm it, Within a Period of --.',
        options: ['30 Days', '15 Days', '45 Days', '60 Days'],
        answer: 2,
        selectedAnswer: 0,
    },
    '27': {
        statement: 'What are used in an Insurance-Contract, to Limit the Liability of the Insurer, under a Contract?',
        options: ['Agreements', 'Warranties', 'Contract', 'Bonds'],
        answer: 2,
        selectedAnswer: 0,
    },
    '28': {
        statement: 'Select the Correct Statement, with Regard to "Warranty".',
        options: ['It is a Part of Both: Cover-Note and Policy- Document.', 'It is a Part of Both: Insurance-Notes and Terms-Document.', 'It is a Part of Terms and Conditions-Document.', 'It is Not Only a Part of Insurer-Conditions, But Also a Policy-Document.'],
        answer: 1,
        selectedAnswer: 0,
    },
    '29': {
        statement: 'If the Warranty is breached, the Risk, agreed to initially, is altered; and the --- is allowed to discharge Him-Self or Her-Self, from Further --, from the Date of Breach.',
        options: ['Liability, Insurer', 'Insurer, Liability', 'Agent, Insurer', 'Policy-Holder, Insurer'],
        answer: 2,
        selectedAnswer: 0,
    },
    '30': {
        statement: 'What We Call the Standard Practice of Insurers, to issue the Policies in a Standard Form; Covering Certain Perils and Excluding Certain Others?',
        options: ['Regular Practice', 'Endorsements', 'Terms', 'Agreement'],
        answer: 1,
        selectedAnswer: 0,
    },
};

export { lifeQuestions, generalQuestions };